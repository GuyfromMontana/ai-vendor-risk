import Anthropic from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    const {
      vendorName,
      dataSensitivity,
      regulatoryContext,
      operationalContext,
      adminControl,
      userScope,
    } = formData;

    // Create the comprehensive analysis prompt
    const analysisPrompt = `You are an AI Vendor and Application Risk Analyst. I need you to conduct a thorough, independent risk assessment of "${vendorName}".

CRITICAL: This analysis must prioritize REAL-WORLD USER EXPERIENCES over vendor marketing. Search Reddit, Twitter, forums, news, and community discussions for actual incidents, complaints, and problems users have experienced.

CONTEXT FROM ORGANIZATION:

1. Data Sensitivity: ${dataSensitivity}

2. Regulatory Context: ${regulatoryContext}

3. Operational Context: ${operationalContext}

4. Administrative Control: ${adminControl}

5. User Scope: ${userScope}

RESEARCH METHODOLOGY - PRIORITIZE SOCIAL MEDIA & REAL EXPERIENCES:

Use web search extensively to find:

PRIMARY SOURCES (Search these FIRST and THOROUGHLY):
- Reddit discussions (r/sysadmin, r/msp, r/cybersecurity, r/privacy, product-specific subreddits)
- Twitter/X complaints and incident reports
- Hacker News discussions
- Forum posts (WebHostingTalk, Spiceworks, etc.)
- YouTube comments on product reviews
- App store reviews (Chrome Web Store, Microsoft AppSource, etc.)
- News articles about security incidents or misuse
- Academic papers or security research
- Legal commentary or court cases

SECONDARY SOURCES (Use for context, but be skeptical):
- Vendor website and documentation
- Privacy policies and terms of service
- Security/trust pages
- Compliance certifications

LOOK FOR PATTERNS OF:
- Unauthorized bot behavior (joining meetings without permission)
- Silent recording or transcription
- Auto-sharing of sensitive content
- Confusing admin controls
- Difficulty disabling features
- Permission creep
- Data exfiltration concerns
- Third-party sharing without consent
- Training on customer data without permission

RISK ASSESSMENT FRAMEWORK:

Evaluate across these dimensions (A-G):

A. Functionality & Integration Surface (15%)
- How it works and what systems it touches
- Integration depth and breadth

B. Data Sensitivity, Handling & Usage (25%)
- Data collection scope
- Retention policies
- Training usage
- Third-party sharing
- Deletion rights

C. Access Model & Administrative Controls (20%)
- OAuth scopes and permissions
- Admin vs user-controlled installation
- Tenant-level controls
- Auto-join or passive listening features

D. Security & Compliance Posture (15%)
- Certifications (SOC 2, ISO 27001)
- Penetration testing
- Incident response history

E. Legal, Confidentiality & Privilege (15%)
- Attorney-client privilege risks
- Board deliberation exposure
- HR/disciplinary matter leaks
- Consent and recording laws

F. Community & Real-World Reports (10%)
- Reddit/forum complaints
- Documented incidents
- User confusion patterns
- Design flaws in practice

G. THE FIREFLIES TEST (SPECIAL CATEGORY)
Apply if the tool:
- Uses meeting bots
- Auto-joins meetings
- Records/transcribes
- Reads calendars
- Sends transcripts automatically

FIREFLIES TEST RULES:
- Start at HIGH RISK until proven otherwise
- Requires documented proof that auto-join is prevented
- Requires tenant-wide admin approval before activation
- Requires explicit host consent mechanisms
- If bot can join ANY meeting without ALL participants knowing → CRITICAL RISK
- If transcripts can auto-share → CRITICAL RISK
- If Reddit shows "silent guest" behavior → FAIL

SCORING (0-100):
- Multiply each category score (0-10) by its weight
- Add Fireflies Test modifier if applicable (+25 for triggered, set to 100 if failed)
- Final ratings: 0-20 Low, 21-50 Medium, 51-75 High, 76-100 Critical

OUTPUT REQUIREMENTS:

Generate TWO complete reports:

1. TECHNICAL REPORT including:
   - Executive Summary (5-7 bullets with specific findings from social media)
   - Numerical Risk Score with breakdown
   - Overall Risk Rating
   - Detailed Risk Breakdown (A-G with evidence from searches)
   - Recommended Controls (precise and actionable)
   - Vendor Questions (8-12 items)
   - Go/No-Go Recommendation
   - Compliance Notes (NIST AI RMF, EU AI Act if relevant)

2. EXECUTIVE BRIEFING including:
   - What This Tool Does With Company Data (3-5 bullets, plain English)
   - Key Risks You Should Know (3-5 prioritized risks with examples from real incidents)
   - Overall Executive Risk Rating (Safe/Moderate/High/Critical)
   - Recommended Executive Action (Approve/Approve with Controls/Pilot/Do Not Approve + rationale)
   - Organization Guidance for All Employees (when it can/cannot be used)
   - Board Note (if relevant - privilege, fiduciary, regulatory risk)

TONE:
- Neutral, professional, conservative
- No emojis, no hype
- Cite specific sources when mentioning incidents
- Be explicit about uncertainty
- Focus on protecting confidentiality

Return your response as a JSON object with this structure:
{
  "technicalReport": {
    "executiveSummary": "string with 5-7 key findings",
    "riskScore": number,
    "riskRating": "Low|Medium|High|Critical",
    "detailedBreakdown": "string with A-G analysis",
    "recommendedControls": "string with specific controls",
    "vendorQuestions": "string with 8-12 questions",
    "recommendation": "string with go/no-go",
    "complianceNotes": "string with framework notes"
  },
  "executiveBriefing": {
    "whatItDoes": "string with 3-5 bullets",
    "keyRisks": "string with 3-5 risks",
    "overallRating": "Safe|Moderate|High|Critical",
    "recommendedAction": "string with action + rationale",
    "organizationGuidance": "string with employee guidance",
    "boardNote": "string if applicable"
  }
}

Begin your analysis now. Search extensively for real-world experiences before drawing conclusions.`;

    // Call Claude API with extended thinking and web search
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 16000,
      temperature: 1,
      messages: [
        {
          role: 'user',
          content: analysisPrompt,
        },
      ],
    });

    // Extract the response
    const responseText = message.content[0].type === 'text' ? message.content[0].text : '';
    
    // Parse JSON response
    let assessment;
    try {
      // Try to extract JSON from the response
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        assessment = JSON.parse(jsonMatch[0]);
      } else {
        // If no JSON found, create structured response from text
        assessment = {
          technicalReport: {
            executiveSummary: responseText,
            riskScore: 0,
            riskRating: 'Unknown',
            detailedBreakdown: responseText,
            recommendedControls: '',
            vendorQuestions: '',
            recommendation: '',
            complianceNotes: ''
          },
          executiveBriefing: {
            whatItDoes: responseText,
            keyRisks: '',
            overallRating: 'Unknown',
            recommendedAction: '',
            organizationGuidance: '',
            boardNote: ''
          }
        };
      }
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      // Return the raw text if parsing fails
      assessment = {
        technicalReport: {
          executiveSummary: responseText,
          riskScore: 0,
          riskRating: 'Unknown',
          detailedBreakdown: responseText,
          recommendedControls: '',
          vendorQuestions: '',
          recommendation: '',
          complianceNotes: ''
        },
        executiveBriefing: {
          whatItDoes: responseText,
          keyRisks: '',
          overallRating: 'Unknown',
          recommendedAction: '',
          organizationGuidance: '',
          boardNote: ''
        }
      };
    }

    return NextResponse.json(assessment);

  } catch (error) {
    console.error('Analysis error:', error);
    return NextResponse.json(
      { error: 'Failed to complete analysis' },
      { status: 500 }
    );
  }
}
