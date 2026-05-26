import type { Module } from "@/lib/types";

export const modules: Module[] = [
  // ─── LEVEL 1: FOUNDATIONS ───────────────────────────────────────────────────

  {
    id: 1,
    slug: "what-is-ai-for-librarians",
    title: "What AI actually is",
    level: "foundations",
    audience: "both",
    acrlCompetencies: ["knowledge"],
    acrlSubCompetencies: ["2.1", "3.1"],
    topics: [
      "How large language models work, without the jargon",
      "What training data is and why it matters for library practice",
      "Why AI says things that are not true, and what to do about it",
      "Why the same question gets different answers",
      "What AI does and does not do reliably",
      "The difference between AI types: generative, predictive, agentic",
      "How AI differs from search engines and databases",
    ],
    objectives: [
      "Explain in plain language what a large language model is and how it generates text",
      "Distinguish AI from search engines and databases in terms of how they retrieve and construct information",
      "Explain why AI generates false information, and apply at least two verification practices that reduce this risk",
      "Identify at least three things AI does reliably and three things it does not",
      "Explain why AI output is probabilistic rather than deterministic",
    ],
    estimatedMinutes: 20,
    status: "published",
    isGap: false,
    description:
      "AI tools feel like magic until something goes wrong. Understanding how they actually work, at a nontechnical level, changes how you use them. This module gives you the mental model you need to work with AI effectively and critically.",
    relatedModules: [
      "talking-to-ai-effectively",
      "picking-the-right-tool",
      "critical-evaluation-ai-output",
    ],
    content: {
      intro:
        "Librarians who begin using AI often approach it the way they approach a search engine: type in a question, expect a correct answer. This approach does not serve them well, not because the tool itself is inadequate, but because it rests on a misunderstanding of what AI is actually doing. In order to use AI effectively in library work, one must first develop a foundational understanding of how it functions, not at the level of computer science but at the level of professional practice. Once that understanding is in place, practice changes entirely, and these tools become genuinely explainable to colleagues and patrons in terms that actually help them.",
      sections: [
        {
          heading: "AI is a prediction machine, not a knowledge database",
          body: `When a librarian types a question into ChatGPT or Claude, the model does not search a database or retrieve stored facts. Instead, it predicts what text should come next, based on statistical patterns learned from billions of documents during a training process. For example, if a librarian asks about the history of interlibrary loan, the model draws on patterns from everything written about that topic in its training data, including journal articles, library blogs, textbooks, and websites, and constructs a response by predicting what a plausible and informative answer would look like. The model is an extraordinarily sophisticated pattern matcher, but it is not retrieving stored facts in the way a database retrieves records.

To understand how this works at a slightly deeper level, it is useful to know how AI processes language. Models do not read words; they read tokens, which are fragments of text roughly corresponding to three quarters of a word on average. For example, the word "cataloging" might be a single token, while "interlibrary" might be processed as two. The model converts every token in a prompt into numerical representations, processes those numbers through layers of mathematical operations called a transformer architecture, and then generates a response token by token, each one selected based on the statistical probability of what should follow given everything that preceded it. Such a process produces remarkably fluent text because fluency, grammatical coherence, and topic relevance are precisely what the model learned to maximize during training.

Such a distinction matters considerably for library practice. A database returns records; a search engine returns links; AI generates text that sounds plausible based on what it has learned. Plausible is not the same as accurate, and this difference has significant implications for how librarians integrate these tools into their professional work. Understanding the mechanism, prediction rather than retrieval, is the single most important conceptual foundation for using AI well.`,
        },
        {
          heading: "How AI learns: training data and its implications",
          body: `Before a model can predict text fluently, it must learn from an enormous quantity of text. This process, called pretraining, involves exposing the model to hundreds of billions of words from books, websites, academic papers, code repositories, and other text sources, then adjusting the model's internal parameters until it becomes very good at predicting what comes next in any given sequence. For example, GPT-4 was trained on text collected from the internet through early 2023, including large web crawls, books, Wikipedia, and code from public repositories. Claude models are trained on a similar range of sources with different emphasis. Such training datasets are assembled by AI companies and are generally not disclosed in complete detail.

Several implications of this training process matter directly for library practice. First, training data has a cutoff date, the point after which no new information was incorporated. For example, a model trained through early 2024 has no knowledge of research published, events that occurred, or databases that changed after that date. This means that any question requiring current information will produce outdated or fabricated responses unless the user provides that information directly in the prompt. Additionally, training data reflects whatever was written on the internet, which means it reflects the biases, assumptions, and errors present in that broader written record.

Second, training data for major AI models included a substantial quantity of copyrighted material, specifically books, articles, and other published works, collected without explicit permission from rights holders. This has produced significant legal challenges; the New York Times filed suit against OpenAI in late 2023, and multiple authors have brought collective action suits over training data use. For librarians working in institutions with active intellectual property policies, this is not merely background context. It is information relevant to professional decisions about which AI tools to recommend and how to discuss AI with faculty and students engaged in original research.

Furthermore, after pretraining, models undergo a process called fine tuning and reinforcement learning from human feedback, in which human reviewers rate model outputs and those ratings are used to adjust the model toward more helpful, accurate, and seemingly safe responses. Such refinement is why modern models tend to decline harmful requests and acknowledge uncertainty, but it does not make them more accurate about facts. It makes them better at presenting information in ways that seem trustworthy, which can paradoxically increase the risk of accepting seemingly plausible errors without verification.`,
        },
        {
          heading: "Why AI says things that are not true",
          body: `Hallucination, the term used when AI generates false information with apparent confidence, is not a bug that will eventually be fixed. It is a structural consequence of how language models work. For example, if a librarian asks Claude to provide three peer reviewed sources supporting a particular argument about digital preservation, the model may generate three citations that look entirely plausible, with realistic author names, recognizable journal titles, and credible publication years, that do not actually exist. The model was not attempting to deceive; it was doing what it always does: predicting what a plausible response would look like. A seemingly convincing citation is, statistically, a plausible set of tokens given a question about sources. Such fabrications are particularly dangerous in library contexts precisely because they look authoritative.

It is evident that the model does not know what it does not know. Unlike a human expert who can say "I am not certain about that; let me check," the language model has no mechanism for distinguishing between information it learned reliably and text it is generating probabilistically. Both are produced by the same prediction process. The model may add disclaimers such as "I should note that I am not certain about this," but these disclaimers are also generated probabilistically. They appear when the model has learned that disclaimers are appropriate in certain contexts, not because the model has verified the accuracy of its output.

In order to protect library patrons and maintain the professional credibility that libraries depend on, librarians must verify any factual claims, statistics, and citations produced by AI before incorporating them into professional work. There is no exception to this rule, regardless of how confident or well sourced the response appears. Additionally, it is useful to tell patrons directly: AI is not a research tool; it is a drafting and thinking tool, and anything it tells you about facts requires verification with a real source. Such framing helps patrons understand why the librarian's role in source evaluation remains indispensable, rather than diminished, by the presence of AI.`,
        },
        {
          heading: "Why the same question gets different answers",
          body: `AI responses are probabilistic in nature. Each time a question is posed, the model samples from a distribution of probable next tokens. It does not deterministically select the single "best" response but rather draws from a range of plausible options weighted by probability. For example, a reference librarian who asks Claude to draft a database instruction email on Monday may receive a response with different emphasis, different examples, and different phrasing than the same prompt produces on Friday. Indeed, this variability can occur even within a single conversation when a prompt is resubmitted without alteration.

Such unpredictability has direct implications for library practice. One cannot treat AI output as a stable, citable source, nor assume that because AI produced a particular answer once, it will produce the same answer again. Furthermore, the same prompt submitted to different AI tools will produce different outputs, because each model has different training data, different architectural choices, and different fine tuning, all of which affect how it weights plausible responses.

It is useful to think of AI as a well read colleague who may explain the same topic differently each time one asks, and whose responses must therefore be evaluated on their own terms rather than assumed consistent. This framing also helps explain to patrons why they cannot simply accept AI output as authoritative: not because AI is always wrong, but because the same question does not reliably produce the same answer, and there is no way to know in advance which response is more accurate without independent verification.`,
        },
        {
          heading: "What AI does well and what it does not",
          body: `There is no doubt that AI performs certain tasks reliably and others poorly, and understanding this distinction is essential for integrating these tools into library workflows effectively. Conflating these two categories by assuming that AI is either uniformly capable or uniformly unreliable produces professional errors in both directions.

AI demonstrates consistent strength in the following areas:
- **Drafting and editing:** emails, lesson plans, LibGuides, patron facing text, policy documents. For example, a library instruction email that would take thirty minutes to draft can often be generated and refined to a usable state in under ten.
- **Summarizing:** long documents, dense reports, or complex policy texts in accessible language for patrons unfamiliar with the subject matter.
- **Generating options and variations:** for example, five different ways to explain a database search to a first year student versus a graduate researcher, or three alternative framings of a research question.
- **Explaining complex topics** in plain language for patrons unfamiliar with scholarly conventions, library terminology, or database structures.
- **Brainstorming and ideation** at the planning stage of a workshop series, a library assessment, or an instruction program.
- **Working with text the user provides:** editing, restructuring, and improving documents that the librarian pastes directly into the prompt. This is the highest reliability mode of AI use and should be the default for most library workflows.

However, AI regularly fails in ways that carry significant risk for library practice:
- **Specific facts, dates, and statistics:** the model will fabricate these confidently and without acknowledgment.
- **Current events after its training cutoff date:** the model has no knowledge of research published, policies enacted, or events that occurred after training ended.
- **Precise citations:** AI generates seemingly credible references that often do not exist, as discussed above.
- **Anything requiring verified, authoritative retrieval:** library catalogs, database records, institutional policies, and accreditation requirements must be retrieved from authoritative sources.
- **Recognizing the limits of its own knowledge:** the model does not know what it does not know, which means it will often answer questions it should decline.

Such patterns make the professional role of the librarian indispensable. AI functions as a drafting and thinking partner, not as a reference source, and this distinction must inform every decision about how and when to use it.`,
        },
        {
          heading: "The three types of AI you will encounter",
          body: `It is useful to distinguish three broad categories of AI, because they function differently and raise different professional considerations for library practice.

**Generative AI** creates new content: text, images, audio, video, and code. ChatGPT, Claude, Gemini, and Perplexity all fall into this category. This is what most librarians are currently experimenting with, and it is the primary focus of Levels 1 and 2 of this curriculum. For example, when a librarian uses ChatGPT to draft a LibGuide introduction or Claude to summarize a lengthy accreditation report, that is generative AI. Such tools are powerful for drafting, editing, and ideation, but they require the verification practices discussed above because they generate rather than retrieve.

**Predictive AI** does not create new content but makes recommendations and classifications based on patterns. For example, the "you may also like" systems embedded in discovery layers and integrated library systems represent predictive AI that libraries have used for years, often without describing it as AI at all. Spam filters, recommendation engines in library discovery systems, and automated metadata enrichment tools all fall into this category. Such systems are familiar, if not always recognized as AI, and they raise different questions than generative AI does, primarily about algorithmic bias, data quality, and the transparency of automated decisions.

**Agentic AI** takes autonomous actions: it does not simply respond to prompts but executes multistep tasks with limited human intervention, browsing the web, writing and running code, sending emails, and interacting with other software systems on behalf of the user. This is a newer and rapidly evolving category, covered in depth in Module 13. Additionally, understanding how agentic AI differs from generative AI is becoming increasingly important for librarians involved in workflow automation, systems integration, and institutional AI policy decisions, since agentic systems raise considerably higher stakes for oversight and accountability than tools that simply generate text.`,
        },
        {
          heading: "How AI differs from search engines and databases",
          body: `Librarians are among the professionals best positioned to understand why AI is not a search engine, because they already understand what search engines are and how they differ from databases. For example, when a student asks "Can I just use Google?" about library databases, librarians explain clearly why they cannot for certain research purposes. The same professional clarity is valuable when explaining to patrons and colleagues why AI is not Google, either.

The fundamental difference is as follows. A **database** stores records and retrieves them in response to queries. When a librarian searches JSTOR for articles on interlibrary loan, JSTOR returns actual articles that exist, were published, and are accessible in full text. The database is an index pointing to real documents. A **search engine** crawls and indexes the web and returns links to pages that exist at the time of crawling. The results are not always accurate, current, or authoritative, but they point to real, externally verifiable pages. An **AI language model** generates text by predicting probable continuations. It does not retrieve records or links; it produces new text. There is no document behind the response. Such a distinction is not intuitive for users who have spent their entire lives seeking information through retrieval systems.

In order to help patrons and colleagues understand this distinction clearly, one framing that proves consistently useful is this: a database is a library stacks, organized and retrievable; a search engine is a map of the stacks, helpful for navigation; an AI language model is a knowledgeable colleague who has read a great deal and can discuss what they have read, but who may misremember, conflate, and occasionally confabulate, and whose memory ends at a specific date. Such a colleague is valuable for certain purposes and wholly unreliable for others. Knowing which is which is the essential professional judgment.

Furthermore, this comparison clarifies the appropriate role of AI in library instruction. Librarians who teach information literacy should not simply add AI to existing instruction about databases and search engines as though it were another tool in the same category. It represents a fundamentally different kind of information system and requires a correspondingly different evaluative framework, one that this curriculum, and the ACRL AI Competencies it is built on, is designed to provide.`,
        },
        {
          heading: "A word on hype and skepticism",
          body: `Interestingly enough, it is useful to hold two seemingly contradictory positions simultaneously: AI tools are genuinely useful for library work at this moment, and they are also overhyped in ways that create real professional risks. There is no doubt that neither uncritical enthusiasm nor reflexive skepticism serves librarians well in this environment. Both positions, taken alone, prevent the kind of calibrated professional judgment that good practice requires.

The claims made for AI in library contexts range from reasonable to extravagant. On the reasonable end: AI does help with drafting, editing, and explaining. On the extravagant end: AI will replace reference librarians, revolutionize cataloging overnight, or solve information literacy problems that decades of library instruction have not. For example, a 2024 Clarivate survey of academic librarians found that the majority had experimented with AI tools in their professional work, but the same survey found significant disagreement about which applications were genuinely valuable and which were being adopted because of institutional pressure rather than demonstrated benefit. Such variation is typical of early adoption periods and argues for measured, evidence informed practice rather than wholesale enthusiasm or wholesale resistance.

The ACRL AI Competencies framework identifies skepticism as a guiding mindset alongside curiosity, and that pairing is deliberate. We are meant to explore and question at the same time. Such dual orientation is precisely what librarians have always brought to information evaluation: the capacity to engage with new sources while maintaining the critical apparatus that distinguishes useful information from misleading information. AI does not require a new professional disposition, but it does require applying an existing one to a new domain.

One framing that proves consistently useful when introducing AI to skeptical colleagues is thinking of it as an amplifier rather than a replacement. The professional value AI delivers depends directly on what the practitioner brings to the interaction: the domain knowledge, the institutional context, the understanding of what a patron actually needs. A prompt written by a librarian who knows her collection, her student population, and her professional obligations produces a categorically different result than the same general prompt written by someone without that knowledge. Such a framing corrects the assumption underlying both enthusiastic overclaiming and reflexive dismissal, namely that AI is doing something independent of the professional using it. It is not. The quality of AI output in professional library work is a function of the expertise the librarian brings to the conversation.

In order to develop this calibrated stance, treating AI as a capable but unreliable research assistant is the most useful frame. One would use a capable assistant. One would also verify their work. One would not send the assistant's output directly to a patron without review. This frame guides practice more reliably than either enthusiasm or resistance alone, and it maps cleanly onto the professional standards that library workers already hold.`,
        },
      ],
      practitionerNote:
        "A common misconception among students is that AI tools like ChatGPT are searching the internet when they generate a response. This misunderstanding leads to two predictable errors: treating AI output as a search result rather than generated text, and assuming that AI has access to current information. An effective way to address this in instruction sessions is to demonstrate the distinction directly: showing the same question posed to Google, to a library database, and to ChatGPT, and asking students to identify what is different about the third response. Such a demonstration takes approximately five minutes and consistently produces a measurable shift in how students evaluate and use AI output for the rest of the session.",
      summary: [
        "AI generates text by predicting probable next tokens. It is not retrieving stored facts from a database.",
        "Hallucinations are structural, not bugs: specific claims, statistics, and citations always require independent verification.",
        "AI output is probabilistic: the same question can produce different answers in different sessions.",
        "Training data has a cutoff date; AI has no knowledge of events, publications, or policy changes after that point.",
        "AI is reliable for drafting, summarizing, and brainstorming; unreliable for citations, current facts, and verified retrieval.",
        "The most important professional frame: think of AI as a capable but unreliable assistant whose work always needs review.",
      ],
    },
  },

  {
    id: 2,
    slug: "talking-to-ai-effectively",
    title: "Talking to AI effectively",
    level: "foundations",
    audience: "both",
    acrlCompetencies: ["knowledge", "application"],
    acrlSubCompetencies: ["4.3", "2.1"],
    topics: [
      "Prompt basics: what makes a good prompt",
      "Prompt patterns for recurring library task types",
      "Iterating and refining instead of accepting first drafts",
      "Chain of thought prompting for complex decisions",
      "System prompts and persistent instructions",
      "When to give AI information versus ask for it",
      "Common prompting mistakes and how to avoid them",
      "Patron privacy: what not to share in a prompt",
    ],
    objectives: [
      "Write a prompt that includes role, task, context, and format instructions",
      "Use follow up prompts to refine and improve AI output rather than starting over",
      "Set up a system prompt or custom instructions for a recurring library task",
      "Apply a chain of thought prompt to a library evaluation or decision making task",
      "Identify at least three patron privacy risks in AI prompting and apply strategies to mitigate them",
    ],
    estimatedMinutes: 25,
    status: "published",
    isGap: false,
    description:
      "Most people underuse AI because they talk to it like a search engine. This module teaches you how to actually communicate with AI, the skill that separates people who get useful results from those who don't.",
    relatedModules: [
      "what-is-ai-for-librarians",
      "picking-the-right-tool",
      "prompt-library-for-library-work",
    ],
    content: {
      intro:
        "The most significant skill gap among librarians beginning to use AI is not about knowing which tool to select. It is about knowing how to communicate with it. A vague prompt produces a vague answer; a specific, context rich prompt produces something one can actually use. In order to close that gap, this module examines the structure of effective prompting, the prompt patterns that serve recurring library tasks reliably, and the practices, including patron privacy, that distinguish responsible AI use from careless use.",
      sections: [
        {
          heading: "The anatomy of a good prompt",
          body: `A useful prompt has four elements. Not every task requires all four, but understanding them allows a librarian to construct prompts deliberately rather than by trial and error.

**Role:** Tell the AI who it is. For example: "You are an experienced academic librarian working at a community college with a large first generation student population." Role instructions orient the model toward the vocabulary, concerns, and register appropriate to the professional context.

**Task:** Tell it exactly what you want: "Write a 200-word email to faculty explaining our new database access policy." The task statement should be specific enough that there is only one reasonable interpretation of what is being asked.

**Context:** Give it the information it needs: "The email is for a first year writing course whose instructor has not responded to previous outreach and may be skeptical about library instruction." Context is where most librarians underinvest. The more relevant background the model has, the less generic the output will be.

**Format:** Tell it how to structure the output: "Use a friendly but professional tone. Three short paragraphs. No bullet points." Without format instructions, AI defaults to whatever it has learned is typical for the task type, which may not match what the librarian actually needs.

Consider, for example, the difference between these two prompts: a vague request such as "Write me an email about our library databases" and a specific one such as "You are a reference librarian at a community college. Write a friendly 150-word email to first year students introducing them to three library databases they will use for English Composition papers: JSTOR, Academic Search Complete, and ProQuest. Include one sentence about how to get help. No jargon." The second prompt produces something one can send with minimal editing. Such specificity is the core skill this module develops, and it applies equally to every library task type.`,
        },
        {
          heading: "Iteration is the skill",
          body: `Most users send one prompt, receive one response, and either accept it or abandon the attempt. This approach does not reflect how AI works most effectively. Iteration, the act of following up, refining, and redirecting, is where the genuine value lies, and it is the practice that most librarians do not develop without deliberate effort.

After receiving a first response, consider follow up prompts such as: "Make this shorter: two paragraphs instead of four"; "This sounds too formal: make it warmer and more approachable"; "The second section does not address what I need; here is what I actually require: [specifics]"; or "Give me three alternative versions of just the opening sentence." Additionally, one might ask the AI to reframe the same content for a different audience entirely, which often produces a more useful draft than revising the original.

In order to use iteration effectively, one must continue the existing conversation rather than beginning a new one. The AI retains context within a session, and that accumulated context shapes the quality of subsequent responses. For example, if earlier in a conversation the librarian has established that the audience is returning adult students who are skeptical of library instruction, follow up prompts benefit from that established context without the librarian needing to repeat it. Such continuity is a significant advantage that users who restart conversations repeatedly do not access.`,
        },
        {
          heading: "Prompt patterns for common library task types",
          body: `The most efficient way to develop prompting skill is to work with proven prompt structures that can be adapted to recurring library tasks rather than constructed from scratch each time. For example, a reference librarian who has developed a reliable prompt pattern for drafting research guides does not need to think through the prompt structure each time; she adapts the pattern to the specific topic and proceeds. Such patterns represent accumulated professional knowledge about how to communicate effectively with AI for specific task types.

Several patterns serve library practice reliably:

**The draft-and-refine pattern** (for drafting emails, instruction content, policy text): "You are a [role]. Write a [format] for [audience] that [purpose]. Tone: [description]. Length: [target]. Include: [specific elements]. Exclude: [things to omit]." This is the workhorse pattern for most library communication tasks.

**The summarize-and-extract pattern** (for processing long documents): "Here is a [document type]. Summarize it in [number] sentences for [audience]. Then extract: (1) the key policy changes, (2) any deadlines, (3) any action required from library staff." For example, this pattern is especially useful when working with accreditation reports, vendor contracts, or administrative memos that a librarian needs to act on quickly.

**The explain-to-audience pattern** (for instruction and patron communication): "Explain [concept] to a [audience description] who [relevant context about their knowledge level]. Use plain language. No jargon. Give one concrete example. Limit to [word count]." Such a prompt reliably produces patron facing explanations that are genuinely accessible rather than merely simplified.

**The generate-options pattern** (for brainstorming): "Generate [number] different [options] for [goal]. Each option should be distinct from the others. Format as a numbered list with a single sentence rationale for each." For example, this pattern works well for generating five different research question framings for a patron who is stuck, or ten different workshop titles for a programming series.

In order to build a personal prompt library, the recommended approach is to document patterns that produce reliable results and save them in a shared document accessible to the whole library team. Such documentation serves both as an efficiency tool and as an institutional knowledge base that persists beyond any individual librarian's tenure, and it provides a practical foundation for the prompt library covered in Module 10.`,
        },
        {
          heading: "Chain of thought prompting for complex decisions",
          body: `A simple but powerful technique that most librarians do not discover without being told: asking the AI to reason through a problem step by step before producing a conclusion consistently improves output quality on complex tasks. For example, instead of asking "Should we purchase a subscription to this new database?", a more effective prompt is: "I am evaluating a new database subscription for our academic library. Here is the vendor's pitch and pricing: [paste]. Think through the following considerations step by step before giving a recommendation: (1) alignment with our subject areas, (2) cost relative to comparable resources, (3) data privacy terms, (4) ILL implications, (5) likely faculty and student usage." The output produced by this prompt is more structured, more complete, and considerably easier to act on than a response to the shorter version.

Such prompting, sometimes called chain of thought prompting, works because it constrains the model to examine each dimension before arriving at a conclusion. A model asked simply for a recommendation will produce a response that sounds confident but may skip important considerations. A model asked to reason step by step is required to work through the problem visibly, which allows the librarian to evaluate whether the AI has understood the question correctly before relying on the output. Additionally, the reasoning itself is documented, which supports professional accountability when decisions need to be explained to administrators or colleagues.

In order to apply this technique to library practice, adding the phrase "think through this step by step" or "reason through the following considerations before responding" to any prompt that involves a decision, an evaluation, or a multistep task consistently produces more structured, more auditable output than a direct question does. Indeed, for any decision that will be shared with a supervisor or committee, the step by step reasoning is often more valuable than the conclusion itself.`,
        },
        {
          heading: "System prompts and custom instructions",
          body: `Most AI tools allow users to set persistent instructions, specifically the text that applies to every conversation automatically. This is where a librarian tells the AI what it should always know about the context of the work, eliminating the need to re-explain context in every session.

For library practice, useful custom instructions include information such as institution type and student population (for example, "I work at a community college serving many first generation college students and students returning to higher education after a gap"), professional role ("I am a reference and instruction librarian responsible for both walk in reference and embedded instruction"), preferred output style ("Always use plain language; avoid jargon; use active voice"), and explicit exclusions ("Never suggest citing Wikipedia as a primary source in a research context; always recommend library databases for academic sources").

Setting this up once eliminates the need to re-explain context in every conversation. Such persistent instructions are especially valuable for librarians who use AI daily for recurring task types, and they represent one of the most significant efficiency gains available at no additional cost. In ChatGPT, this feature appears as "Custom Instructions" in account settings. In Claude, it functions as "Custom Instructions" or as a Project with persistent context attached. In Gemini, it is accessible through account settings as well. Furthermore, Claude's Projects feature allows the librarian to attach documents such as a collection development policy, an instruction framework, and a list of available databases that persist across all conversations within the project. Indeed, this single setup step often produces a measurable improvement in output quality across all subsequent uses.`,
        },
        {
          heading: "When to give AI information versus ask for information",
          body: `There are two fundamentally different modes of AI prompting, and understanding which mode a given task requires changes how one writes the prompt and evaluates the output.

**Information in:** The librarian shares a document, email, or draft and asks AI to work with it. For example: "Here is a LibGuide I drafted. Improve the clarity of the introduction and suggest more descriptive section headings." This mode is considerably more reliable because AI is working with content the user has provided rather than generating facts from training data. Such grounding in provided materials reduces hallucination risk substantially, because the model cannot fabricate details that are directly in front of it.

**Information out:** The librarian asks AI to produce information it does not already have in front of it. For example: "What are the most useful databases for nursing research?" This mode requires more verification because AI is drawing on training data that may be outdated, incomplete, or imprecise regarding specialized library resources. The model may confidently name databases that have changed, merged, or been discontinued since its training cutoff.

In order to get the most reliable results in daily library workflows including drafting, editing, summarizing, and brainstorming, one should default to the information in mode. This means pasting in the document one is working on, sharing a draft rather than asking for one from scratch, and providing the patron's question verbatim rather than paraphrasing it. Such an approach produces better output and requires substantially less verification. Moreover, it reflects a sound professional principle: AI is most useful as a collaborator working with what the librarian brings to the conversation, not as an independent source of facts.`,
        },
        {
          heading: "Common prompting mistakes and how to avoid them",
          body: `There is no doubt that certain prompting mistakes are nearly universal among librarians beginning to use AI, and identifying them directly is more efficient than allowing practitioners to discover them through accumulated frustration.

**Prompts that are too short.** The most frequent mistake is submitting a two or three word query, the kind of thing one might type into Google. For example, "email about databases" will produce a generic response that requires extensive revision. A prompt specific enough to produce useful output is almost always several sentences long, with role, task, context, and format specified. Such short prompts underutilize AI's capacity to work with detailed professional context.

**Accepting the first response.** Most users treat the first AI response as the output. In practice, the first response is a starting point. For example, after receiving a draft instruction email, effective users follow up: "The second paragraph is too formal: make it warmer"; "Shorten this by half and keep only the most essential information"; "Give me an alternative opening that leads with the patron's need rather than the library's services." Such iteration is where the quality gain happens.

**Asking for too many things at once.** A prompt that asks AI to "write an instruction email, design a lesson plan, and suggest five assessment activities" will produce mediocre results across all three. It is more effective to ask for one thing, evaluate and refine the result, and then proceed to the next task. Additionally, breaking complex tasks into steps allows the librarian to verify each stage before proceeding to the next.

**Explaining again context in every new conversation.** Users who begin a new chat session for each task lose all accumulated context. Setting up system prompts or custom instructions, as described above, eliminates this inefficiency. Such persistent context is the single most underused feature among librarians who use AI regularly, and correcting this habit alone often produces a measurable improvement in daily output quality.

Beyond these foundational mistakes, several more specific failure patterns appear regularly enough to name directly. When a response is too generic, the cause is almost always insufficient context about the specific situation. Adding details about the audience, the constraints, or the purpose makes the task genuinely specific, and a response to a genuinely specific prompt is never generic. When a response is the wrong length, specifying it explicitly in the prompt produces more consistent results than asking AI to adjust afterward: "two paragraphs" or "under 100 words" gives the model a concrete target, whereas "make it shorter" leaves the definition of shorter entirely to the model. When the tone is wrong, the most effective correction is to provide an example of writing in the tone the librarian actually wants, either as a pasted sample or as a specific description such as "the way a colleague would explain this at the reference desk." Such concrete guidance produces better calibration than adjectives like "more conversational" alone.`,
        },
        {
          heading: "Evaluating AI for your specific workflows",
          body: `An important practice that most librarians do not encounter without deliberate instruction is developing systematic intuition for how AI performs on the specific tasks that constitute one's actual professional work. AI is not uniformly capable or incapable across all tasks. A model that produces excellent reference email drafts may need considerable guidance for subject specific instruction content, and a tool that summarizes accreditation reports reliably may struggle with specialized library policy questions. The only way to know this for a given workflow is to test it directly.

A practical approach begins with gathering a small set of examples: five to ten instances of a task one does regularly, whether reference consultation summaries, instruction planning notes, LibGuide introductions, or patron communication drafts. Writing prompts designed to generate similar outputs and comparing the results to one's own examples reveals where AI adds genuine value, where it requires significant editing to reach a usable state, and where professional review is essential before any output can be used. For example, a cataloging librarian who tests AI generated subject heading suggestions against records she has already cataloged will develop concrete, firsthand intuition for accuracy rates in her specific collection areas. Such firsthand knowledge is considerably more reliable than general claims about AI performance for any given task type.

Such testing does not require technical infrastructure. What it requires is the discipline to compare AI output against one's own professional judgment on tasks one knows well. The result is not a pass or fail verdict on the tool but a calibrated understanding of where AI assistance is worth incorporating into a workflow and where the verification investment would eliminate the efficiency gain. In order to develop this calibration systematically, a useful practice is to identify one recurring task and run ten examples through the AI tool, noting where the output required significant correction and where it did not. Such a practice converts an abstract question about AI reliability into specific, actionable knowledge about one's actual work.`,
        },
        {
          heading: "Patron privacy and what not to share in a prompt",
          body: `Libraries have a long and principled commitment to patron privacy, and that commitment must extend to AI use. This is not a theoretical concern. For example, if a reference librarian pastes a patron's verbatim question, along with identifying details about the patron's research, into a commercial AI tool, that information may be processed by the AI company's servers, logged, and potentially used for training or reviewed by company employees, depending on the tool's terms of service and privacy settings. Such a practice would constitute a meaningful breach of patron privacy in most library contexts, particularly in jurisdictions where patron records carry legal protection.

In order to use AI ethically in reference and patron services, librarians should establish clear practices about what information may and may not go into a prompt. As a general rule, remove all identifying information before pasting patron questions into AI. For example, instead of submitting "A nursing student named Maria asked about finding articles on postpartum depression for her capstone project at St. Louis Community College," the prompt should read: "A nursing student is looking for peer reviewed articles on postpartum depression for a capstone project. Suggest three search strategies and two relevant databases." Such anonymization preserves the utility of the AI assistance while protecting the patron.

Furthermore, librarians should understand the privacy terms of any AI tool used for professional work. Free tiers of commercial AI tools typically reserve more rights over user inputs than paid institutional plans do. ChatGPT's Team and Enterprise plans, Claude's Team and Enterprise plans, and Google Workspace editions of Gemini all offer stronger data protection terms than their free consumer counterparts, including commitments not to use inputs for training. Indeed, the privacy conversation between librarians and their institutions about which AI tools are approved for professional use is as important as any prompting skill, and librarians are well positioned to lead it given their existing expertise in data governance and patron confidentiality.`,
        },
      ],
      practitionerNote:
        "A reliable prompt practice for reference work involving unclear patron questions: when a patron's research need is underspecified, remove any identifying details and paste the question into Claude with the following prompt: 'A patron has asked the following research question. Generate five clarifying questions I could ask to better understand their actual need: [question].' This approach surfaces angles that would not have been considered independently, particularly for research topics outside one's subject expertise. Such a practice takes approximately thirty seconds and consistently improves the quality of the reference interaction that follows, which is a reasonable return on a very small investment of time.",
      summary: [
        "Effective prompts include four elements: role, task, context, and format. Specificity is the core skill.",
        "Iteration through follow up prompts produces far better results than accepting a first response and starting over.",
        "System prompts and custom instructions eliminate the need to restate your professional context in every session.",
        "Default to the information in mode: give AI your documents to work with rather than asking it to generate facts from scratch.",
        "Patron privacy obligations apply to prompts: strip all identifying information before including any patron related content.",
        "Chain of thought prompting, which asks AI to reason step by step, consistently improves output on complex or multipart tasks.",
      ],
    },
  },

  {
    id: 3,
    slug: "picking-the-right-tool",
    title: "Picking the right tool",
    level: "foundations",
    audience: "both",
    acrlCompetencies: ["analysis", "knowledge"],
    acrlSubCompetencies: ["3.4", "4.5", "2.3"],
    topics: [
      "ChatGPT, Claude, Gemini, and Copilot: what actually differs",
      "AI tools built specifically for library work",
      "Free vs. paid tiers: what the difference means for library practice",
      "Data privacy per tool: what happens to your inputs",
      "When not to use AI",
      "A framework for evaluating new tools as they emerge",
      "Matching tool to task: a working guide",
    ],
    objectives: [
      "Compare the major general purpose AI tools on at least four practical dimensions relevant to library work",
      "Identify what data privacy considerations apply when choosing an AI tool for professional library use",
      "Make an informed decision about when AI is and is not appropriate for a given library task",
      "Apply a structured evaluation framework to an AI tool you have not previously used",
      "Match a specific library task to the most appropriate AI tool based on task type and privacy requirements",
    ],
    estimatedMinutes: 20,
    status: "published",
    isGap: false,
    description:
      "There are dozens of AI tools and new ones appear weekly. This module gives you a framework for evaluating them, a practical comparison of the major tools you'll encounter, and clear guidance on when not to use AI at all.",
    relatedModules: [
      "what-is-ai-for-librarians",
      "ethics-copyright-policy",
      "prompt-library-for-library-work",
    ],
    content: {
      intro:
        "A common question librarians ask is which AI tool to use, and the honest answer is that the question itself requires reframing. Tool selection is not a matter of identifying the most popular option or the one with the most impressive marketing. It is a professional decision that involves evaluating capability, privacy terms, institutional context, and task fit, and making that evaluation deliberately rather than by default. In order to make sound tool choices, one must understand what each major tool does well, what it does not, and what happens to the information one puts into it.",
      sections: [
        {
          heading: "Tool selection as professional judgment",
          body: `When a patron asks a librarian which database to use for a research question, the librarian does not answer by naming the largest or most widely advertised option. She evaluates the patron's topic, the type of sources needed, and the scope of the assignment, and recommends accordingly. For example, a nursing student looking for clinical evidence requires different resources than a history student writing a senior thesis, and a skilled librarian distinguishes between them. The same professional reasoning applies to AI tool selection.

There is no single best AI tool. There are tools that perform better for certain task types, tools that carry different privacy implications, tools that integrate with different institutional environments, and tools that differ in cost. Additionally, the landscape changes rapidly; a tool that was the strongest option in a given category one year may have been surpassed by the next. In order to make sound decisions across this shifting landscape, librarians need an evaluation framework, not a fixed list of recommendations. Such a framework is what this module provides.

Two dimensions deserve particular weight in a library context: what the tool does with inputs (privacy), and whether it generates or retrieves (reliability). Both affect how the tool can appropriately be used in professional library work, and both are often poorly understood by librarians who adopt tools based on marketing or peer recommendation alone. Indeed, the professional judgment involved in AI tool selection is not different in kind from the judgment librarians have always applied to database selection, simply applied to a newer and faster moving category of resource.`,
        },
        {
          heading: "The major general purpose tools: a practical comparison",
          body: `The following tools represent the primary options available to academic librarians as of 2026. Each has genuine strengths and meaningful limitations, and the landscape has shifted considerably over the past year; tools that were experimental in 2024 are now production grade, and new entrants have become impossible to ignore.

**ChatGPT (OpenAI)** is the most widely recognized AI tool globally and has the largest user community, which means the most community resources, tutorials, and library specific examples available through professional channels. For example, the ACRL and ALA discussion boards have accumulated substantial practitioner experience with ChatGPT that is not yet available for newer tools. The free tier uses GPT-4o and is genuinely capable for most drafting and editing tasks, though it imposes rate limits that become noticeable with daily use. The paid tier (Plus, approximately $20/month) removes those limits and adds access to newer GPT-5 series models as well as OpenAI's o series reasoning models, specifically o1 and o3, which are designed for complex multistep problems rather than drafting. For library work, the standard GPT-4o or GPT-5 models handle most tasks well; the reasoning models are valuable for tasks involving complex decision trees or multistep evaluation, such as assessing a vendor contract against a checklist of institutional requirements. For data privacy, inputs on the free tier may be used to improve OpenAI's models unless the user explicitly opts out in account settings, a step many users have not taken.

**Claude (Anthropic)** is particularly strong for tasks involving long documents and nuanced, sustained writing, and the Claude 4 model family, comprising Opus 4, Sonnet 4, and Haiku 4, has meaningfully expanded both capability and speed. Claude's context window is among the largest available, at 200,000 tokens, which means a librarian can paste an entire accreditation self study document and ask Claude to identify gaps relative to a specific standard without hitting length limits that would affect other tools. Claude's Projects feature allows users to attach persistent documents such as a collection development policy, an institutional style guide, and a list of approved databases that remain available across all conversations within the project. Such functionality is particularly useful for librarians who want consistent, institution specific output across recurring tasks. Anthropic is generally regarded as more conservative in its approach to data use, and the Pro plan ($20/month) provides full access with clearer privacy terms than the free tier.

**Gemini (Google)** is most valuable for librarians and institutions whose primary workflow runs through Google Workspace. Gemini integrates directly into Google Docs, Gmail, Drive, and Slides, allowing it to work with documents in the places where they already live rather than requiring copy paste workflows. The current Gemini 3.1 Pro model supports a context window of one million tokens and handles text, images, audio, and video in a single conversation, which is particularly relevant for digital collections librarians working with mixed media. Gemini also has access to Google Search as a grounding mechanism, which reduces (but does not eliminate) hallucination on factual questions. For institutions that have signed Google Workspace enterprise agreements, the privacy terms may differ from consumer Gemini; this requires verification with institutional IT rather than assumption.

**Microsoft Copilot** is the most important tool for librarians at institutions running Microsoft 365, and it is substantially underrepresented in library AI discourse relative to its actual relevance. Copilot integrates into Word, Outlook, Teams, Excel, and OneNote, and can draft emails, summarize long documents, and generate meeting notes directly within these applications. For example, a librarian who receives a lengthy vendor proposal as a Word document can ask Copilot to summarize the key terms and flag anything requiring legal review without leaving the application. Institutions with Microsoft 365 enterprise agreements may already have access to Copilot as part of their existing contract, worth verifying with IT before purchasing a separate AI subscription.

**Perplexity** is designed to combine AI generation with real time web search, and every response includes citations to the pages from which it drew information. For example, a librarian wanting a quick overview of a new federal policy affecting library funding can ask Perplexity and receive a summary with source links to verify. Such citations reduce but do not eliminate hallucination risk, since the model may still misrepresent sources it cites. Perplexity is most useful for quick factual orientation where seeing sources alongside the answer matters more than depth of analysis.

**Grok (xAI)** is worth awareness even if it is not yet widely discussed in library professional literature. Grok is built into the X platform and is also available as a standalone product. Its distinguishing feature is real time access to X platform content, which makes it useful for tracking current professional conversations and emerging library community responses to policy changes. For library practice, Grok is most relevant as a complement for monitoring professional discourse rather than as a primary drafting or research tool; its privacy terms and institutional data governance implications require the same evaluation as any other commercial AI tool before professional use.`,
        },
        {
          heading: "AI tools built for library work",
          body: `Beyond the general purpose tools, a growing category of AI products is designed specifically for research and library environments. These tools are worth knowing about even if they are not yet in widespread use, because they represent how AI is being integrated into the systems libraries already manage.

Research intelligence platforms such as Clarivate's Research Assistant and Elsevier's SciVal are adding AI features that allow researchers and librarians to query large bodies of academic literature, identify research trends, and map citation networks. For example, Clarivate's integration with Web of Science allows users to ask natural language questions about literature in a field and receive structured summaries grounded in the actual indexed database rather than in a language model's training data. Such tools carry significantly lower hallucination risk for bibliographic queries than general purpose AI, because they retrieve from controlled, curated sources rather than generating from training data.

Library system integrations are also emerging. Ex Libris (Alma, Primo) and OCLC (WorldShare) have both announced AI features embedded in their platforms. For example, AI assisted metadata enrichment, subject heading suggestions, and accessibility improvements to catalog records are available or in development in several major ILS environments. Additionally, discovery layer vendors are adding conversational interfaces that allow patrons to query holdings in natural language. Such integrations are worth monitoring via LTI (LibTech Insights), Library Technology Reports, and LITA/CORE interest group discussions, since the capabilities of these tools are changing more rapidly than their documentation.

The existence of library specific tools does not mean general purpose AI is inappropriate for library work. It means that tool selection should be matched to task type: general purpose AI for drafting, editing, and instruction design; specialized tools for bibliographic queries, collection analysis, and patron facing discovery where accuracy and citation grounding are non negotiable. Such a distinction is the practical expression of what ACRL subcompetency 3.4, which covers evaluating AI tools for specific library tasks, requires.`,
        },
        {
          heading: "Free vs. paid tiers: what the difference means for library practice",
          body: `The free tier of most major AI tools is genuinely useful and represents a reasonable starting point for a librarian exploring AI for the first time. For example, the free version of ChatGPT using GPT-4o can draft a LibGuide introduction, summarize a document, or generate a set of workshop objectives at a quality level that is immediately useful for most practitioners. Such capability at no cost is substantial, and librarians who have not yet tried these tools have access to more than is commonly assumed.

However, several meaningful differences separate free from paid tiers. Rate limits are the most immediate: free tier users encounter usage caps that interrupt workflows during periods of heavy use, particularly near semester peak periods or during preparation for major instruction programs. Paid tiers remove or substantially raise these limits. Model access is the second difference: free tiers may restrict access to the most capable model version, or provide access on a limited rotating basis. Furthermore, paid institutional plans, specifically the Team and Enterprise tiers for ChatGPT, Claude, and Gemini, typically include contractual data privacy commitments that free tiers do not, which is a significant consideration for professional library use involving any patron context.

In order to advocate effectively for institutional AI access, librarians should be prepared to make the case in terms administrators understand: time saved on drafting, reduced revision cycles, more responsive patron communication, and clearer data governance compliance. Such arguments, grounded in workflow efficiency and institutional risk management rather than novelty, tend to be more persuasive than capability demonstrations alone. Indeed, the data privacy argument, namely that a paid institutional plan provides contractual protection that a free consumer account does not, is often the argument that moves library administration and IT from caution to action.`,
        },
        {
          heading: "Data privacy: what each tool does with your inputs",
          body: `Data privacy is the dimension of tool selection that most directly implicates professional library ethics, and it deserves more attention than it typically receives in informal librarian conversations about AI. In order to understand the implications, it is useful to know what "using inputs for training" actually means. When a user submits a prompt and receives a response, the tool provider may log both the prompt and the response, use them to evaluate model performance, and incorporate them into future training rounds. For example, if a librarian's prompt describes a patron's research question in identifying detail, that information has potentially left the librarian's control, and, depending on the tool's terms, may have left the institution's jurisdiction.

The general rules as of 2025 are as follows. Free consumer tiers, including ChatGPT free, Claude free, and Gemini personal account, typically reserve the right to use interaction data for training, with opt out available in some cases through account settings. Paid consumer plans, specifically ChatGPT Plus and Claude Pro, generally offer stronger opt out terms but not always contractual protections. Paid institutional plans, including ChatGPT Team/Enterprise, Claude Team/Enterprise, and Google Workspace Business/Enterprise with Gemini, typically include contractual commitments not to use customer data for training. Such commitments carry legal weight in ways that opt out checkboxes in account settings do not.

Additionally, data storage and jurisdiction matter for institutions with specific compliance requirements. For example, some institutions subject to HIPAA, FERPA, or state level student privacy laws may face restrictions on which AI tools are permissible for certain data types, regardless of the tool's general privacy policy. The appropriate resource for institution specific guidance is the library's IT department, general counsel, or compliance office, not the AI vendor's marketing materials. Librarians who develop working relationships with their IT colleagues around AI governance will be better positioned to make responsible tool recommendations than those who navigate privacy questions independently.`,
        },
        {
          heading: "When not to use AI",
          body: `There is no doubt that AI is inappropriate for certain library tasks, and identifying those tasks clearly is as important as knowing when AI is useful. Such clarity is part of what distinguishes professional AI use from uncritical adoption, and it is the practical expression of the skepticism that ACRL identifies as a core competency mindset.

AI is not appropriate in the following situations:

**When the task requires verified citations.** AI fabricates references, as discussed in Module 01. A librarian should never use AI to find sources; AI may be used to process, summarize, or discuss sources that the librarian has already verified through authoritative channels.

**When the input involves patron identifiable information in an unapproved tool.** Patron privacy obligations apply to what a librarian puts into a prompt. A detailed reference question that could identify an individual patron should not go into a free tier consumer tool, and should not go into any tool that the institution has not reviewed and approved for that use case.

**When the task requires high stakes factual accuracy.** Statistics, legal information, medical information, accreditation standards, and institutional policy, any claim where being wrong has significant professional or institutional consequences, must be verified from primary, authoritative sources rather than accepted from AI output. For example, a librarian advising a patron on FMLA eligibility or a faculty member on fair use should consult authoritative legal resources, not an AI summary.

**When the patron expects human judgment and empathy.** Some reference interactions involve personal circumstances that require discretion, sensitivity, and professional judgment that AI cannot replicate. For example, a student navigating an academic integrity process, a patron researching a sensitive health situation, or a faculty member in a difficult publication dispute: these interactions require a human librarian. AI may inform the librarian's preparation, but it should not mediate the interaction itself.

**When the institution has not approved the tool.** Many institutions have developed or are developing AI acceptable use policies. Using an unapproved tool for professional work, even for a seemingly low risk task, creates compliance and liability exposure that the librarian bears.`,
        },
        {
          heading: "A framework for evaluating new tools as they emerge",
          body: `New AI tools appear at a rate that makes it impossible to evaluate each one thoroughly as it launches. In order to stay current without being overwhelmed, it is useful to work through a structured set of questions before adopting or recommending any new tool. Such a framework makes evaluation repeatable, defensible, and faster than approaching each new tool from scratch.

The questions to apply are as follows. First: who built this tool and what is their business model? Free tools often monetize user data, and tools without a clear business model may disappear or change terms without notice, a meaningful risk for any library workflow that depends on them. Second: what does the privacy policy say, specifically, about training data use, data retention, and data jurisdiction? Vendor privacy pages vary enormously in clarity and specificity, and the details that matter most for library use are rarely in the top level summary.

Third: is there library community discussion about this tool? LTI (LibTech Insights) from Choice360, Library Technology Reports from ALA TechSource, and LITA/CORE discussion forums are the most reliable sources for library contextualized assessment, and they tend to identify practical limitations that vendor marketing does not mention. Fourth: does my institution have a policy about this tool, or is it subject to a category exclusion in the acceptable use policy? Checking with IT before adopting is significantly more efficient than explaining an unauthorized tool adoption after the fact.

Fifth: is there a genuine library specific use case, or is this a general tool being marketed into library contexts without library relevant features? Such marketing is common. Sixth: can I pilot it with low stakes tasks such as internal drafts, brainstorming, and non patron facing content before using it for anything that affects professional output or patron services? Additionally, piloting with a colleague rather than alone produces faster and more reliable assessment, since different task types surface different limitations.`,
        },
        {
          heading: "Matching tool to task: a working guide",
          body: `The practical question most librarians face is not which tool is best in the abstract but which tool is most appropriate for the specific task at hand. For example, the tool best suited for summarizing a forty page policy document is not necessarily the same tool best suited for drafting patron facing instruction emails, and neither is the same tool best suited for a quick factual lookup where source citations matter. Understanding this task and tool relationship is the applied expression of the professional judgment this module develops.

The following principles guide tool selection by task type. For drafting and editing tasks, including emails, instruction content, LibGuides, policy documents, and committee reports, Claude is generally preferable for longer documents or anything requiring sustained tone consistency, and ChatGPT is useful for shorter tasks where its large community of examples supports rapid iteration. For tasks requiring Google Workspace integration, such as drafting in Docs, managing in Sheets, and summarizing in Drive, Gemini is the practical choice given its native integration with those environments. For institutions running Microsoft 365, such as generating reports in Word, drafting emails in Outlook, and taking meeting notes in Teams, Copilot is worth exploring even if it is less discussed in library AI circles, since it may already be available through the institutional Microsoft agreement.

For factual questions requiring source citations (quick research overviews, policy summaries with verifiable sources), Perplexity is a useful complement to, but not a replacement for, library database search. Such a tool is appropriate for orientation to a topic, not for authoritative information. For bibliographic and catalog level tasks, library specific integrations through existing ILS and discovery platforms are more appropriate than general purpose AI, because they retrieve from controlled sources rather than generating from training data.

In order to develop genuine judgment about tool selection, deliberately varying the tools used for low stakes tasks over a period of several weeks, noting where each tool's outputs differ meaningfully, and building that experiential knowledge before applying it to higher stakes professional work produces the most reliable results. Such deliberate practice is the most reliable path to tool discernment, the kind of calibrated, task specific judgment that ACRL subcompetencies 3.4 and 4.5 describe as the professional standard.`,
        },
      ],
      practitionerNote:
        "One approach to developing an institutional tool policy is through conversation rather than top down mandate: reference and instruction work uses Claude Pro under an institutional account for anything involving patron context, and ChatGPT free is acceptable for internal drafts and brainstorming that do not involve patron specific information. Such a division of use typically takes about three months of informal experimentation to develop, and the most useful forcing function is having everyone attempt the same task on two different tools and compare the results directly. In order to develop the same kind of institutional calibration, identifying two or three recurring task types and running a structured comparison across available tools produces immediate, visible differences and helps the team build shared vocabulary for discussing and justifying tool choices.",
      summary: [
        "Tool selection is a professional judgment, not a popularity contest. Evaluate by task type, privacy terms, and institutional fit.",
        "Free tiers are genuinely useful but lack the contractual data privacy protections that paid institutional plans provide.",
        "AI is inappropriate for verified citations, patron identifiable data in unapproved tools, and any high stakes factual claim.",
        "Match tool to task: Claude for long documents, Gemini for Google Workspace, Copilot for Microsoft 365 environments.",
        "Apply a structured evaluation framework, including business model, privacy policy, community feedback, and institutional approval, before adopting any new tool.",
        "AI native library tools (Primo Research Assistant, Elicit, Connected Papers) retrieve from controlled sources and carry lower hallucination risk for bibliographic work.",
      ],
    },
  },

  {
    id: 4,
    slug: "ethics-copyright-policy",
    title: "Ethics, copyright & policy",
    level: "foundations",
    audience: "both",
    acrlCompetencies: ["ethics", "knowledge"],
    acrlSubCompetencies: ["1.1", "1.2", "1.3", "1.4", "1.5", "2.2", "2.5"],
    topics: [
      "Hallucinations: what they are and why they happen",
      "Data privacy and patron confidentiality",
      "Intellectual property, copyright, and AI generated content",
      "Institutional AI policies: reading and writing them",
      "ACRL AI Competencies framework overview",
      "ARL Guiding Principles 2024, including 'No Human, No AI'",
      "FERPA, HIPAA, and sensitive institutional data in AI workflows",
      "Evaluating vendor AI tools through an ethics lens",
    ],
    objectives: [
      "Explain what hallucinations are and apply at least two strategies to detect them",
      "Identify patron privacy obligations that apply when using AI in reference work",
      "Describe the current copyright landscape for AI generated content and what it means for library practice",
      "Review or contribute to an institutional AI acceptable use policy",
      "Apply the ARL 'No Human, No AI' principle to a library workflow decision",
      "Locate your role within the ACRL AI Competencies framework and identify one subcompetency to develop further",
      "Apply an ethics evaluation framework to a vendor AI product before recommending or adopting it",
      "Identify at least two scenarios in which FERPA or HIPAA constraints apply to AI use in library work",
    ],
    estimatedMinutes: 30,
    status: "published",
    isGap: false,
    description:
      "Ethics are not separate from practical AI use; they are embedded in every decision about which tool to use, what to put into it, and what to do with what comes out. This module maps the ethical landscape you need to navigate in library work.",
    relatedModules: [
      "critical-evaluation-ai-output",
      "picking-the-right-tool",
      "making-the-case-to-administration",
    ],
    content: {
      intro:
        "A striking feature of the ACRL AI Competencies document is how much of it is about caution. Not fear, but caution. There's a difference. This module is about developing the professional judgment to use AI in ways that serve your patrons and uphold your values.",
      sections: [
        {
          heading: "Hallucinations: the most misunderstood AI problem",
          body: `Hallucination, the term for when AI confidently states something false, is not a bug in the traditional sense. It is a direct consequence of how large language models work. The model is always predicting the most plausible next token, and sometimes plausible is wrong. Module 01 covers the mechanism in depth; the professional implication for ethics practice is that hallucination is structural and persistent, not a feature that model updates will eventually eliminate. The question is not whether AI hallucinates but how to work with it responsibly given that it does.

In library contexts, the hallucination types that carry the most professional risk are the ones that look most authoritative: invented citations with plausible journal names, volume numbers, and page ranges; statistics that sound reasonable but cannot be traced to a primary source; incorrect dates for events or policies; wrong author attributions; and legal or policy characterizations that are outdated or simply wrong. Such errors are not random; they tend to occur precisely where the model has learned that seemingly authoritative specificity is expected. A hallucinated citation does not announce itself; it is formatted correctly and plausible in content. Recognizing this pattern is the first step in the professional practice of verification that Module 05 covers in full.

What hallucination is not is a reason to dismiss AI entirely. It is a reason to verify, always, and proportionally to the stakes and claim type of the output. The same critical evaluation librarians apply to any information source applies here, with the added professional knowledge of which claim types carry the highest risk in AI generated text.`,
        },
        {
          heading: "Patron privacy: our professional obligation comes first",
          body: `Library confidentiality is foundational to professional practice. The ALA Code of Ethics commits librarians to protecting patron privacy, and that commitment does not have a technology exception. AI tools do not automatically honor patron confidentiality; that requires deliberate professional choices about what information enters a prompt and which tools are used for which tasks.

The risks are specific. Consumer tier AI tools may log inputs and use them for model training, which means a patron's research question, entered verbatim into a free tier tool, may be processed by the vendor's servers, retained, and potentially reviewed by company employees or incorporated into future training data, depending on the tool's terms of service. Such a practice would constitute a meaningful breach of patron privacy in most library contexts, particularly for inquiries that touch on sensitive circumstances: health information, legal questions, immigration status, financial difficulty, crisis situations. Inputting any patron information that could identify the individual into an unapproved commercial AI tool is not a minor procedural lapse; it is a professional conduct matter.

In order to use AI ethically in reference and patron services, the practical guidance is straightforward. Strip all identifying information before putting any patron inquiry into AI. For example, instead of pasting a patron's verbatim question with their name and institution, describe the research need anonymously: "A nursing student is looking for peer reviewed articles on postpartum depression for a capstone project." Use institutional AI agreements that include contractual data privacy protections where they are available, rather than consumer tier tools with opt out checkboxes. Follow your institution's IT and legal guidance on which tools are approved for which data types. And when the situation involves information sensitive enough that you are uncertain, handle the interaction without AI; the professional judgment to decline a tool in a specific context is itself an expression of the competency this module addresses.`,
        },
        {
          heading: "Copyright and AI generated content",
          body: `The copyright landscape for AI generated content is unsettled in ways that will likely require years of litigation and legislation to resolve, but several positions are clear enough to guide current professional practice. In order to navigate this landscape responsibly, librarians need a working understanding of two distinct copyright questions: who, if anyone, holds copyright in AI generated outputs, and what copyright obligations arise from the training data that AI models were built on.

On the first question, the U.S. Copyright Office has been consistent: copyright requires human authorship, and content generated by AI without significant human creative input is not copyrightable. For library work, this means that AI drafted communications, LibGuide content, or instruction materials that were generated by AI and lightly edited carry at most partial copyright protection for the human authored elements. Such a position matters when libraries produce content intended for publication, grant applications, or official institutional documents; the authorship question is less critical for patron facing materials where accuracy matters more than attribution, but it is professionally relevant for any content the library publishes in its own name.

On the training data question, the situation is actively litigated. Major AI models were trained on copyrighted materials, specifically books, articles, and other published works, collected without explicit license from rights holders. The New York Times filed suit against OpenAI in late 2023, multiple authors have brought collective action suits, and the outcomes of these cases will shape how AI generated outputs can be used commercially. For current library practice, the implications are still developing. Being transparent about AI use when it is relevant to publication or attribution, following emerging institutional disclosure policies, and documenting AI assisted workflows for content produced under grant funding or for official publication are all defensible professional practices while the legal landscape continues to evolve. The ARL Guiding Principles (2024) address this directly: libraries have a professional stake in preserving copyright flexibility for nonprofit research and educational uses, which means the training data copyright debate is not merely a legal matter for AI companies to resolve but a professional advocacy issue for the library field.`,
        },
        {
          heading: "The ARL Guiding Principles, and 'No Human, No AI'",
          body: `The Association of Research Libraries published seven guiding principles for AI in April 2024. They're worth reading in full. The principle that proves most consistently clarifying for library practice is Principle 4:

**"No Human, No AI"**: consequential decisions must not be delegated entirely to AI systems. Human involvement is essential at critical decision making junctures.

For library practice, this principle is clarifying. AI can help you draft, research, brainstorm, and organize. But decisions that affect patrons, including what information to provide, how to support someone in crisis, whether to escalate a situation, and how to evaluate a collection, require human professional judgment.

This isn't about AI being untrustworthy. It's about recognizing that accountability requires a human. When something goes wrong, and sometimes it will; there needs to be a professional who made a decision and can answer for it.`,
        },
        {
          heading: "Institutional AI policies: reading and contributing",
          body: `Your institution either has an AI policy, is developing one, or should be. Either way, librarians have a professional role to play, not merely as policy followers but as the professionals best equipped to understand what responsible information use requires.

**Reading a policy:** When reviewing an institutional AI policy, librarians should look for the following elements. First, which tools are explicitly approved or prohibited, and whether the approval list is current, given how rapidly the tool landscape changes. Second, what categories of data may and may not be input into AI systems, and whether patron related data is specifically addressed. Third, whether there are disclosure requirements for professional communications or publications that used AI assistance, and how those requirements apply to library produced content such as LibGuides, research handouts, and instruction materials. Fourth, who holds institutional responsibility for AI related decisions and incidents, and whether the library has a designated point of contact for AI policy questions.

**Contributing to policy:** Librarians have professional expertise that is directly relevant to AI policy development, including information ethics, intellectual property, patron privacy, and information literacy, and are rarely at the table when institutional policies are drafted. For example, an institutional AI policy written without library input may fail to address the specific circumstances of reference interactions, patron data protection, or the use of AI in instruction settings. In order to ensure that library concerns are represented, librarians should proactively request inclusion in AI policy working groups, submit written comments when policies are circulated for review, and position the library as the natural institutional home for information governance questions that AI use raises.

ACRL subcompetency 2.5 specifically asks us to "understand AI related policies and regulations." At the professional level, this means both following them and helping to shape them. Module 11 covers the advocacy dimension of this work in considerably more depth, including how to make the case for library leadership on AI governance to administrators who may not have considered the library's role.`,
        },
        {
          heading: "The ACRL AI Competencies framework: your professional roadmap",
          body: `In October 2025, ACRL published the AI Competencies for Academic Library Professionals, the first framework from the national association to define what professional AI competency looks like for librarians. For example, this is the document that provides the structure for this entire curriculum: each module is mapped to specific subcompetencies, and the three levels of this learning pathway correspond to the framework's progression from foundational knowledge through applied practice to advanced leadership.

The ACRL framework is organized into five competency domains. The Knowledge domain addresses understanding what AI is, how it works, and its limitations, the territory covered in Modules 01 through this one. The Application domain addresses using AI tools effectively for library tasks, including prompting, tool selection, and workflow integration, as covered in Modules 05 through 10. The Ethics domain addresses professional responsibilities around privacy, bias, intellectual property, and accountability, which is the core of this module. The Analysis domain addresses critical evaluation of AI output, AI systems, and AI policy, woven throughout the applied modules. The Leadership domain addresses advocacy, institutional strategy, and the library's role in shaping AI use across the broader institution, which is the focus of Modules 12 through 16.

For a practicing librarian, the most useful function of the ACRL framework is not as a credential checklist but as a professional self assessment tool. For example, a reference librarian who feels confident in Knowledge and Application competencies but is uncertain about how to approach the Leadership domain now has a published professional standard to anchor her development planning, and can point to that standard when making a case for professional development time or funding. Such alignment between individual professional development and an ACRL endorsed framework is significant in institutional conversations about the value of library AI training. The full ACRL framework document is freely available at acrl.ala.org; it is a document worth reading in its entirety rather than relying on summaries, including this one.`,
        },
        {
          heading: "FERPA, HIPAA, and sensitive institutional data in AI workflows",
          body: `The patron privacy obligations covered earlier in this module become substantially more complex when specific federal privacy laws apply. Two are particularly relevant for academic library practice: FERPA (the Family Educational Rights and Privacy Act) and, in health sciences library and hospital library contexts, HIPAA (the Health Insurance Portability and Accountability Act). In order to work with AI responsibly in these contexts, librarians need a practical understanding of what these frameworks require, not at the level of legal expertise, but at the level of professional judgment about what information should and should not enter an AI workflow.

FERPA protects education records of students who are enrolled at institutions receiving federal funding, which includes virtually every college and university in the United States. Education records include grades, transcripts, financial aid information, disciplinary records, and any document that contains personally identifiable information about a specific student. For example, if a librarian receives a request from a faculty member that includes a student's name alongside details about the student's research challenges, academic standing, or accommodation status, that communication may contain FERPA protected information. Inputting such information into a commercial AI tool, even a paid institutional plan, without explicit institutional authorization for that data category would constitute a FERPA concern, not merely a professional privacy preference. The determination of which AI tools are FERPA compliant for which data types belongs to the institution's compliance office, not the individual librarian.

HIPAA applies in health sciences library contexts, including medical school libraries, hospital libraries, and any library serving clinical environments where patient information may be referenced. HIPAA's minimum necessary standard requires that only the information necessary for a specific purpose be accessed or disclosed, which has direct implications for AI prompts. For example, a clinical librarian assisting a nurse with a literature search on a patient's condition should not include any patient identifiers or case specific clinical details in an AI prompt, regardless of how helpful such context might seem. Such information is protected health information (PHI) under HIPAA, and its entry into a commercial AI tool would constitute a potential breach even when the intent is purely professional.

In order to navigate these requirements without institutional legal training, librarians should establish a simple default: when uncertain whether information is subject to FERPA or HIPAA, do not include it in an AI prompt. Additionally, librarians should consult their institution's privacy officer or general counsel for guidance on which AI tools have been assessed for compliance with applicable federal privacy laws, and should document that consultation, since having sought guidance is itself evidence of good faith professional conduct.`,
        },
        {
          heading: "Evaluating vendor AI tools through an ethics lens",
          body: `Library vendors are integrating AI into the systems librarians manage daily, including catalog discovery, research databases, interlibrary loan platforms, digital repository software, and learning management system integrations. For example, a discovery layer with an AI powered "research assistant" feature that suggests sources and summarizes article abstracts is now available from multiple major vendors, and librarians are increasingly expected to evaluate and configure these features without clear guidance from their institutions. In order to fulfill this responsibility with professional rigor, librarians need an ethics evaluation framework that can be applied to vendor AI features, not just general purpose tools.

Several questions are essential to this evaluation. First: where does the AI feature process data, and does that processing happen on the vendor's servers, on third party AI provider servers, or within the institution's infrastructure? The answer affects what data governance agreements apply and whether patron interaction data leaves the institution's control. For example, a discovery layer that sends patron search queries to an external AI provider for summary generation may be processing patron search behavior in ways that are not covered by the library's existing agreement with the discovery layer vendor. Second: does the vendor's AI feature have a training data arrangement that raises intellectual property concerns? Several vendors have faced questions about whether their AI tools were trained on licensed library content, which could implicate the terms of the institution's database agreements.

Third: what happens when the AI feature produces incorrect information and a patron relies on it? Vendor marketing rarely addresses error liability directly, but this is a question that should be asked before deployment, and the answer should inform how the feature is presented to patrons. Fourth: does the vendor provide transparency about which AI model or models power the feature, what training data was used, and how the outputs are grounded or verified? Such transparency is not universal and its absence should be treated as a flag, not a norm. Additionally, librarians should consult LITA/CORE, LTI Choice360, and Library Technology Reports for community sourced assessments of specific vendor AI features, since independent professional evaluation is more reliable than vendor documentation in a rapidly evolving market. The ARL statement on principles for vendor AI transparency (2024) is also a useful framework for structuring vendor conversations and contract negotiations.`,
        },
      ],
      practitionerNote:
        "Librarians are frequently asked to help faculty develop AI policies for their syllabi, and increasingly to help institutions review draft AI acceptable use policies before they go to senior leadership. The productive approach in both contexts is the same: start with the ARL principles and the ACRL framework, identify which subcompetencies the policy needs to address, and then adapt the language to the specific audience and context. Librarians are natural policy translators: they understand both the information landscape and the professional obligations embedded in it. Making the ACRL framework and the ARL Guiding Principles standard references in any policy conversation the library enters, whether as a reviewer, a contributor, or an advocate, gives librarians professional standing in discussions that too often happen without them.",
      summary: [
        "Patron privacy obligations extend to AI prompts: strip all identifying information before including any patron context, regardless of the tool.",
        "The ARL principle 'No Human, No AI' is the clearest professional guide: consequential decisions affecting patrons require human judgment.",
        "AI generated content is generally not copyrightable in the U.S.; training data copyright is actively litigated and professionally relevant.",
        "FERPA and HIPAA constrain which patron and student data may enter AI workflows; consult your compliance office, not the vendor's marketing.",
        "The ACRL AI Competencies framework (2025) maps professional development across five domains: Knowledge, Application, Ethics, Analysis, and Leadership.",
        "Librarians have standing in institutional AI policy development; information ethics, patron privacy, and information literacy are core library expertise.",
      ],
    },
  },

  {
    id: 5,
    slug: "critical-evaluation-ai-output",
    title: "Critical evaluation of AI output",
    level: "foundations",
    audience: "both",
    acrlCompetencies: ["analysis", "ethics"],
    acrlSubCompetencies: ["3.1", "3.2", "3.3", "2.4"],
    topics: [
      "Spotting hallucinations: what they look like in professional practice",
      "Verification strategies for AI generated claims",
      "Fact checking AI output against authoritative sources",
      "When to trust and when to verify: calibrating professional skepticism",
      "Connecting critical evaluation to the ACRL Information Literacy Framework",
      "Bias, gaps, and what AI systematically gets wrong",
      "Teaching AI evaluation to students and patrons",
      "Building a personal AI evaluation checklist",
    ],
    objectives: [
      "Apply at least three verification strategies to AI generated text",
      "Identify the claim types most likely to be hallucinated and explain why each is high risk",
      "Connect AI critical evaluation to the six frames of the ACRL Information Literacy Framework",
      "Explain AI evaluation to a student or patron using a live demonstration approach",
      "Identify at least two categories of systematic bias in AI output and their implications for library practice",
      "Develop a personal checklist for evaluating AI output tailored to your daily work context",
      "Describe the difference between fact checking an AI generated claim and verifying a citation",
      "Apply a calibrated trust framework to distinguish lower risk from higher risk AI outputs",
    ],
    estimatedMinutes: 25,
    status: "published",
    isGap: false,
    description:
      "Librarians have been teaching critical evaluation of sources for decades. AI does not require a new framework; it requires applying what you already know to a new type of source. This module bridges that connection.",
    relatedModules: [
      "what-is-ai-for-librarians",
      "ethics-copyright-policy",
      "ai-for-research-support",
    ],
    content: {
      intro:
        "Critical evaluation of information sources is foundational to library practice, and it is the professional competency that transfers most directly to working with AI. The questions librarians have always brought to sources apply here without modification: Who produced this, and by what process? What are the structural limitations of how it was created? What kinds of errors does this source type characteristically make? Can I verify the specific claims it makes? What might it systematically omit? The source type is new; the professional reasoning is not. In order to apply that reasoning effectively, however, a librarian needs a clear understanding of the specific failure modes of AI generated content, because the hallmarks of AI errors are distinct from the errors produced by other source types, and recognizing them requires deliberate familiarity.",
      sections: [
        {
          heading: "What hallucinations look like in practice",
          body: `Hallucinated content has a characteristic signature that librarians, once they learn to recognize it, begin to see reliably: it is specific and confident. A general claim such as "AI has transformed academic research workflows" carries low hallucination risk. A specific claim with named details attached, such as a citation with journal name, volume, issue, page range, and DOI; a statistic with a precise percentage attributed to a named report; a quote attributed to a specific person with a publication date: all of these carry substantially higher risk. Such specificity is exactly what language models are trained to produce, because specificity is what confident, authoritative text looks like. The model predicts the tokens that follow a seemingly plausible claim, and those tokens often include seemingly plausible bibliographic details that do not correspond to real documents.

The practical implication is that the most dangerous AI outputs in a library context are the ones that look the most authoritative. For example, a hallucinated citation does not announce itself as fabricated. It includes a seemingly realistic journal name from the appropriate field, a publication year within the expected range, an author name with appropriate disciplinary credentials, and a volume and issue number that fall within the journal's publication history. The DOI may be syntactically correct but resolve to nothing, or may resolve to a different article entirely. Such a fabrication is indistinguishable from a real citation until it is verified, which is precisely why verification cannot be optional.

Several categories of claim warrant consistent verification regardless of how confident the AI response appears:
- **Specific statistics and percentages**: numbers are among the most commonly hallucinated details; the model has learned that quantitative claims carry authority and will produce seemingly plausible figures
- **Named citations with full bibliographic details**: the most frequent and consequential hallucination type in library and research contexts
- **Quotes attributed to specific people**: the model may correctly attribute a general position to a person while fabricating the specific words
- **Historical dates and specific events**: particularly vulnerable to subtle errors that are difficult to catch without direct verification
- **Policy and legal claims**: training data may be outdated, and the consequences of acting on incorrect policy information in a professional context are significant

By contrast, certain AI outputs carry lower hallucination risk: structural recommendations, tone and style guidance, brainstorming lists, and summaries of documents the librarian has provided are all lower risk categories because they are not factual claims about the world, or because the model is working with provided content rather than generating from training data. In order to build reliable AI evaluation instincts, it is useful to internalize this risk gradient and apply it automatically when reviewing AI outputs.`,
        },
        {
          heading: "Verification strategies for AI generated claims",
          body: `There is no shortcut to verification, but there are strategies that make it efficient enough to be sustainable in daily professional practice. In order to verify AI output systematically without treating every use of AI as a research project, librarians need a small set of reliable strategies that can be applied quickly to the specific claim types most likely to be wrong.

The most important strategy is citation verification before claim verification. If AI produces a citation, the first question is not whether the claim the citation supposedly supports is true; it is whether the cited document exists and says what the AI says it says. This two step sequence is more efficient than attempting to verify the underlying claim through other means, because if the citation is fabricated, the claim itself may also be unreliable and should be sourced independently regardless. For example, a librarian who receives an AI generated paragraph asserting that "Smith and Jones (2021) found that 73% of academic libraries report..." should immediately run that citation through a library database before engaging with the 73% figure at all. If the Smith and Jones article does not exist, the figure requires independent sourcing. If it does exist, the article itself should be consulted to confirm that it actually contains that finding.

The second strategy is asking AI to characterize its own uncertainty, which is more reliable than it might initially appear. Asking "How confident are you in this specific claim? What are you uncertain about? Where might I find a primary source for this?" will often produce a useful acknowledgment of uncertainty, not because the model has access to a confidence metric it would otherwise conceal, but because such questions are answered through the same prediction process as everything else, and the model has learned that acknowledging uncertainty is the appropriate response in certain conversational contexts. Such responses should be treated as leads for further investigation rather than as definitive assessments of reliability, but they are genuinely useful for identifying which specific elements of a complex response deserve the most verification effort.

The third strategy is triangulation with authoritative sources. For any factual claim that will be used in professional work (advice to a patron, content in a LibGuide, information in a committee report), verification through at least one authoritative source that the librarian can cite independently is a professional standard, not an optional precaution. For example, if AI reports that a particular database covers a specific range of years or disciplines, the library's own database documentation or the vendor's platform page is the authoritative source, and that is where the claim should be confirmed. Such triangulation takes additional time and is the reason that AI does not actually accelerate research workflows in which accuracy is non negotiable; it accelerates drafting and thinking workflows, which is a different and genuine value.`,
        },
        {
          heading: "Fact checking AI output against authoritative sources",
          body: `Fact checking AI generated content is a distinct activity from verifying a citation, and the distinction matters practically. Verifying a citation establishes whether a document exists and whether it says what AI claims. Fact checking a claim establishes whether the underlying assertion is accurate, independently of what AI said and independently of whether AI cited anything in support of it. Both activities are necessary in different circumstances, and confusing them leads to verification gaps.

For factual claims that AI makes without citation support (figures, dates, characterizations of policy, descriptions of professional standards), the appropriate fact checking process begins with identifying what type of authoritative source would be definitive for that category of claim. For example, a claim about ALA policy should be verified against ALA's own published documents. A claim about ACRL subcompetencies should be verified against the ACRL AI Competencies document itself. A claim about federal law should be verified against the actual statutory text or a recognized legal resource. A claim about database coverage should be verified against the database vendor's documentation. Such source type matching is precisely the professional skill that librarians teach students under the heading of source authority, and it applies without modification to AI fact checking.

The most common fact checking error among librarians beginning to use AI is using AI to fact check AI. Asking a different AI tool whether a claim produced by the first AI tool is accurate does not constitute verification. For example, asking Claude whether a statistic produced by ChatGPT is correct may produce a confident confirmation, a confident contradiction, or an acknowledgment of uncertainty, none of which constitutes verification, because neither model has access to the authoritative source. Verification requires consulting the primary or authoritative source directly. Additionally, web search is not automatically sufficient for verification; search results may themselves draw on AI generated content or on sources that repeat an inaccurate claim widely enough to make it appear credible. In order to verify AI generated factual claims reliably, the authoritative source must be consulted, not merely a source that agrees with the AI.`,
        },
        {
          heading: "When to trust and when to verify: calibrating professional skepticism",
          body: `Treating every AI output as requiring full verification is not professionally sustainable. A librarian who must independently verify every sentence of every AI drafted email will abandon the workflow within a week, not out of carelessness but because the overhead eliminates the value. In order to use AI effectively and responsibly, practitioners need a calibrated approach that applies verification effort proportionately to actual risk, not uniformly to all outputs.

Such calibration rests on two dimensions: the stakes of the output and the claim type. Stakes refer to the consequences of an error. A hallucinated figure in a draft email to a colleague for internal planning purposes carries lower stakes than the same figure in a LibGuide accessible to hundreds of students or in a committee report that will inform a budget decision. The same AI error, in different contexts, requires different verification responses. Claim type, as discussed in the prior section, refers to the structural risk profile of specific kinds of AI generated content; citations, statistics, and quotes carry higher risk than structural recommendations and editing.

The practical result of applying both dimensions is a tiered approach to verification. High stakes outputs with high risk claim types (any AI generated content that will be published, presented to administration, used to advise a patron on an important decision, or incorporated into instruction materials) require verification of all factual claims through authoritative sources before use. Medium stakes outputs with mixed claim types such as internal planning documents, draft materials that will be reviewed before use, and brainstorming artifacts require verification of specific high risk elements while lower risk elements can be accepted provisionally. Low stakes outputs composed of lower risk claim types such as structural advice for a draft document, tone and style suggestions, and reorganization recommendations can generally be evaluated on their professional merits without independent source verification, though the librarian's own professional judgment remains the final filter.

In order to develop genuine calibration rather than a mechanical checklist, it is useful to develop the habit of identifying, before using AI for any task, what category of output is being produced and what the consequences of an undetected error would be. Such explicit risk assessment takes approximately ten seconds and substantially changes the verification behavior that follows. Additionally, the calibration should be communicated explicitly when working with colleagues who are newer to AI, because the instinct to either fully trust or fully distrust AI outputs is common among beginners, and neither instinct produces responsible practice.`,
        },
        {
          heading: "Connecting to information literacy frameworks you already teach",
          body: `The ACRL Framework for Information Literacy provides six frames that structure how librarians conceptualize and teach critical engagement with information sources. Each frame connects directly to the evaluation of AI generated content, and for librarians who already teach these frames, that connection provides a ready made professional vocabulary for integrating AI evaluation into existing instruction without constructing an entirely new pedagogical apparatus.

**Authority is Constructed and Contextual** is the frame most directly applicable to AI evaluation. AI has no authority in the framework's sense; it does not derive credibility from institutional position, expertise, peer review, or community recognition. It synthesizes patterns from sources that may or may not carry authority, without preserving or communicating the authority of those sources. For example, when a student asks AI about the history of a research method, the response synthesizes from whatever sources were in the training data, weighted by statistical patterns rather than by scholarly standing. The productive question for instruction is not "Is AI authoritative?" but "What would the actual authority be for this claim, and how do I find it?"

**Information Creation as a Process** frames AI particularly well because it foregrounds the production mechanism. AI text is generated through statistical prediction, not through research, expert judgment, or evidence evaluation. Students who understand the generation process, even at the conceptual level covered in Module 01, evaluate AI output more accurately than students who treat it as a search result.

**Information Has Value** connects to AI through questions of attribution and training data. AI does not cite its sources, which means the value chain of the information it synthesizes (who produced it, under what conditions, with what rights) is entirely obscured. Copyright, attribution, and scholarly credit questions are all embedded in this frame's application to AI.

**Searching as Strategic Exploration** is the frame most often violated by patrons who use AI as a search tool. AI does not search databases; it generates text. A patron who asks AI for sources on a topic is not retrieving indexed records from a controlled collection. The model is producing seemingly credible citations from statistical patterns. The key distinction for patron instruction is between AI as a thinking tool (appropriate) and AI as a search tool (inappropriate for anything requiring authoritative retrieval).

**Scholarship as Conversation** highlights a limitation of AI that students often do not consider: AI cannot represent current scholarly debate. Its training has a cutoff date, and even within that date, the representation of any given scholarly conversation is shaped by what was most statistically prevalent in the training data, not by what is most significant in the field. Use AI for synthesis; go to databases for understanding current debate.

**Research as Inquiry** most clearly articulates why AI does not replace library research. Inquiry involves forming questions, evaluating evidence, reaching conclusions, and revising them, an iterative process of intellectual engagement with sources. AI can support inquiry at specific points, but it cannot conduct it. Instruction that helps students understand this distinction provides durable professional value regardless of how AI tools evolve.`,
        },
        {
          heading: "Bias, gaps, and what AI systematically gets wrong",
          body: `Hallucination refers to AI generating false specific claims. Bias is a different and in some ways more consequential problem: AI systematically overrepresenting certain perspectives, populations, languages, and epistemological frameworks while underrepresenting others, in ways that reflect the composition of the training data and the choices made during fine tuning. In order to evaluate AI output as a professional, a librarian needs to understand not only whether a specific claim is accurate but whether the overall response reflects a complete and representative view of the relevant knowledge landscape.

The most significant bias pattern in large language models is the overrepresentation of English language, Western, and American sources and perspectives. Models trained predominantly on English language web content and books produce outputs that reflect English language norms, examples, and frameworks as default. For example, a librarian asking AI to describe research library practices will receive a response shaped primarily by practices at American and British research universities, not because other models of library practice do not exist, but because they are underrepresented in the training data relative to the volume of English language library literature. Such a response may be accurate for its context while being significantly misleading about the global landscape of the profession.

A second systematic gap is recency. Models have a training cutoff date, and the cutoff affects reliability differently depending on the subject area. For a domain such as AI itself, where developments occur monthly, a model trained through late 2024 is substantially outdated on its own field. For a domain such as the history of medieval manuscripts, the same cutoff matters much less. In order to apply this awareness practically, librarians should identify the training cutoff of any AI tool being used, note the rate of change in the subject area being addressed, and treat AI outputs on fast moving topics with proportionally higher skepticism.

A third pattern is the overrepresentation of majority views and consensus positions at the expense of legitimate minority scholarly perspectives. Models trained on large corpora tend to converge on the most statistically common framing of a topic, which may exclude emerging research, contested findings, or perspectives associated with less published communities. For example, a patron researching a topic where community based participatory research has produced findings that conflict with dominant quantitative studies may receive AI output that represents only the dominant position, because that position has more representation in the training data. In order to counteract these patterns, librarians should treat AI's representation of any contested intellectual landscape as a starting point requiring bibliographic expansion rather than a complete account.`,
        },
        {
          heading: "Teaching AI evaluation to students and patrons",
          body: `In order to teach AI evaluation effectively, the approach that consistently produces the most durable learning is demonstration rather than instruction. A librarian who spends twenty minutes explaining that AI fabricates citations produces less behavioral change in students than a librarian who spends ten minutes demonstrating the fabrication live and allowing students to encounter it directly. Such a demonstration makes the abstract concrete in a way that explanation cannot, and the resulting skepticism is calibrated and experiential rather than theoretical.

A reliable demonstration sequence proceeds as follows. First, ask the AI tool to identify three peer reviewed sources on a topic relevant to the course for which instruction is being delivered, a topic the students know something about, so they can evaluate plausibility. Second, attempt to locate each cited article in an appropriate library database while students observe. Third, report the results transparently: typically at least one citation does not exist, at least one has bibliographic details that do not match any real document, and at least one may exist but may not say what the AI claims. Fourth, ask students directly: given what you just saw, how does this change how you will use AI in your research process? Such a question invites students to draw their own conclusions rather than receiving a rule, which produces more reliable behavior change. Additionally, this demonstration takes approximately ten minutes and can be integrated into an existing single shot instruction session without displacing other content.

For patron interactions at the reference desk, the most effective approach is normalization rather than warning. When a patron mentions that they used AI in their research process, the productive response is not an expression of concern but a practical question: "Did you verify those sources? Let's take a look together." Such framing positions verification as the expected professional next step, which it is, rather than as a corrective response to a mistake. For example, a patron who arrives with an AI generated list of sources can be guided through the verification process as a reference interaction, which serves both the immediate research need and the patron's long term information literacy.

Furthermore, the language used in patron instruction matters considerably. Framing AI as "unreliable" or "dangerous" tends to produce binary responses: patrons either dismiss the concern and continue using AI uncritically, or overcorrect and avoid it entirely. Neither response reflects the calibrated professional judgment the librarian is trying to model. The more accurate framing is that AI has specific strengths and specific failure modes, verification is the professional practice that allows one to benefit from the strengths while managing the failure modes, and the librarian is the professional most qualified to teach that practice. Such framing positions the library's expertise as essential to AI use rather than opposed to it.`,
        },
        {
          heading: "Building a personal AI evaluation checklist",
          body: `There is no doubt that the most durable professional practice is one that has been made explicit, documented, and tested rather than simply internalized as a vague disposition toward skepticism. In order to evaluate AI output consistently across the full range of tasks and contexts a librarian encounters, it is useful to develop a personal checklist, a specific, written set of questions applied deliberately to AI outputs before they are used in professional work. Such a checklist is not bureaucratic overhead; it is the professional equivalent of a pilot's preflight check, converting an evaluative disposition into a reliable procedure.

An effective AI evaluation checklist for library practice should address four categories of question. The first is output type: What kind of content did AI produce? Does it contain specific factual claims, citations, statistics, quotes, or legal and policy information? Identifying the claim types present determines which verification steps apply and how much verification effort is warranted.

The second category is stakes: Where will this output be used? Is it an internal draft for my own reference, a patron facing document, a published resource, or a committee report? Higher stakes require more thorough verification. The calibration framework described in the prior section applies here as the decision rule.

The third category is claim specific verification: For each high risk claim identified in the first step, what is the authoritative source, and have I consulted it? For citations: does the document exist, and does it say what AI claims? For statistics: what is the primary source, and does the figure appear there? For policy and legal claims: what is the governing document, and does it support the AI's characterization?

The fourth category is gap assessment: What does this response not address that would be relevant to a complete professional answer? AI outputs tend to present confident syntheses that omit contested perspectives, recent developments, and minority scholarly positions. Asking explicitly what is missing is as important as verifying what is present.

In order to make such a checklist actionable rather than aspirational, writing it out in the specific language that works for one's own professional context, keeping it brief enough to complete in under two minutes, and applying it consistently to all AI outputs intended for professional use rather than selectively to outputs that seem suspicious is the approach that produces durable habit. Additionally, sharing the checklist with library colleagues creates a common professional vocabulary for AI evaluation that strengthens the team's collective practice, and contributes to the kind of institutional AI literacy that ACRL subcompetencies 3.1 through 3.3 describe as the professional standard.`,
        },
      ],
      practitionerNote:
        "Keeping a printed AI evaluation checklist visible at the reference desk serves as a consistent reminder to apply it, not only when a response seems suspicious. The most dangerous AI outputs are often the ones that seem most authoritative, and the checklist is most valuable precisely in those moments when nothing seems wrong. When introducing colleagues new to AI to this practice, sharing the checklist as a practical tool is more effective than explaining the reasoning first; the reasoning becomes clearer through use. The single question that proves most useful to add to any checklist is: 'What would the primary source be for this specific claim, and have I looked at it?' For library professionals, that question is already second nature for evaluating student research; applying it to AI output is a professional skill transfer, not a new skill.",
      summary: [
        "Specific, seemingly confident claims, including citations, statistics, and attributed quotes, carry the highest hallucination risk; verify before use.",
        "Verify citations before claims; never use one AI tool to fact check another.",
        "Apply calibrated skepticism: match verification effort to the stakes of the output and the risk profile of the claim type.",
        "All six ACRL Information Literacy frames, namely Authority, Creation, Value, Searching, Scholarship, and Inquiry, connect directly to AI evaluation.",
        "AI systematically overrepresents English language, Western, and majority view perspectives; treat any contested topic as requiring bibliographic expansion.",
        "A written personal evaluation checklist converts a professional disposition into a reliable, repeatable procedure.",
      ],
    },
  },

  // ─── LEVEL 2: APPLIED ─────────────────────────────────────────────────────

  {
    id: 6,
    slug: "ai-for-research-support",
    title: "AI for research support",
    level: "applied",
    audience: "practicing",
    acrlCompetencies: ["application", "analysis"],
    acrlSubCompetencies: ["4.1", "4.4", "3.2"],
    topics: [
      "Literature reviews: where AI helps and where it doesn't",
      "Systematic search assistance and search strategy drafting",
      "Summarizing papers and evidence synthesis",
      "Helping patrons use AI for research: your new instruction role",
      "Emerging AI native research tools (Connected Papers, Elicit, Consensus)",
    ],
    objectives: [
      "Use AI to draft, refine, and expand a database search strategy",
      "Apply AI for summarizing and synthesizing research documents patrons provide",
      "Describe at least three AI native research tools and when to recommend them",
      "Explain to a patron the appropriate and inappropriate uses of AI in their research process",
      "Develop a research support workflow that integrates AI at appropriate points",
    ],
    estimatedMinutes: 25,
    status: "published",
    isGap: false,
    description:
      "Research support is where many librarians first encounter real AI utility, and real AI failure. This module maps where AI adds value to literature reviews, search strategy, and evidence synthesis, and where it gets students into trouble.",
    relatedModules: [
      "critical-evaluation-ai-output",
      "reference-and-instruction",
      "prompt-library-for-library-work",
    ],
    content: {
      intro:
        "A pattern that appears repeatedly across disciplines and student levels is students arriving at the reference desk with a list of twenty AI generated sources for their literature review. In a typical such list, eight articles do not exist, four exist but say nothing resembling what the student claims they say, and the remaining eight require individual verification before they can be used. This experience defines the challenge at the center of this module. It is not that AI is a poor tool for research support. It is that the workflows most students naturally apply to AI in a research context are poor workflows: they produce the appearance of scholarship without the substance of it. In order to provide effective research support in an AI environment, librarians need to know precisely where AI adds genuine value, where it introduces serious risk, and how to communicate that distinction in ways that change how patrons actually work.",
      sections: [
        {
          heading: "Where AI genuinely helps in research support",
          body: `The distinction that matters most for research support is between AI tasks grounded in content the patron has already retrieved versus AI tasks that require generating facts from training data. In research support contexts, the applications where AI delivers genuine value tend to be the former: assisting patrons with thinking through a research problem, processing documents they already hold, and explaining concepts they have not yet encountered. Understanding this distinction allows librarians to direct patrons toward productive AI use without endorsing the problematic applications that lead to fabricated citations.

**Search strategy development** is the area of most consistent genuine value. When a patron brings a research question and needs help developing a search strategy, AI can rapidly generate a substantive set of search terms, synonyms, related concepts, Boolean combinations, and relevant subject headings. For example, a librarian working with a graduate student researching the intersections of telehealth adoption and rural health equity can ask Claude to generate search terms organized by concept cluster (telehealth terminology, rural health identifiers, equity and access language, and relevant MeSH headings for PubMed) in approximately thirty seconds. Such a brainstorm does not replace the librarian's judgment about which terms are most appropriate for which databases; it provides the raw material for that judgment with substantially less effort than generating it manually.

**Summarizing provided documents** is the second reliably useful application. When a patron has a set of abstracts, a full article, or a selection of PDFs and needs help identifying key themes, methodological approaches, or relevant findings, AI working with that provided content produces reliable and useful summaries. This is the information in mode discussed in Module 02: the model is processing text the patron has already retrieved from authoritative sources rather than generating facts from training data. For example, a nursing student preparing a systematic review can paste twelve abstracts into Claude and ask it to identify shared themes, divergent findings, and methodological differences across the set, and receive a structured synthesis that would take considerably longer to produce manually. Such summaries warrant review rather than acceptance without evaluation, but the hallucination risk is substantially lower than when AI is asked to generate content from scratch.

**Explaining research concepts** on demand is a third consistent strength. Research methods, statistical approaches, citation conventions, and disciplinary norms that a patron encounters for the first time can be explained at the appropriate level by AI without requiring an available librarian. For example, a social work student unfamiliar with the difference between a systematic review and a scoping review can receive a clear, example grounded explanation in plain language immediately. Such on demand explanation is particularly valuable in research support contexts outside of library hours or when a patron is working independently between consultations, with the important caveat that any substantive claims the explanation contains should be confirmed against authoritative methodology documentation before being relied upon.

Additionally, AI serves research support well at the **question formation** stage. A patron struggling to articulate a focused research question can ask AI to generate five alternative framings of a broad topic, or to suggest what aspects of a topic appear underresearched. While the model's knowledge of any given field has limitations, including a training cutoff date and representation biases toward English language and Western sources, it can reliably generate the conceptual variety that helps patrons move from a vague interest to a workable question. Such assistance is often invisible as "research support," but it represents a meaningful expansion of the librarian's consultative role when AI is positioned as a thinking partner in the consultation rather than a source of authoritative answers.`,
        },
        {
          heading: "Where AI fails: the research support risks librarians must communicate",
          body: `The failure modes of AI in research support are structural, not incidental. They follow directly from how large language models work, specifically prediction from training data, and they do not disappear with newer model versions or more careful prompting. In order to advise patrons effectively, librarians need to understand these failure modes at a level that allows them to explain the underlying reason, not merely list a set of prohibitions. Patrons who understand why AI fails in specific ways develop more durable verification habits than patrons who have simply been warned.

**Finding sources** is the most consequential failure mode. AI cannot search databases. When asked to find peer reviewed articles on a topic, the model generates seemingly credible citations from statistical patterns in its training data. Some of these citations correspond to real publications; many do not. Such fabrications are not random; they follow the conventions of real citations closely, including realistic author names, appropriate journal titles, and plausible publication years, which makes them difficult to identify without verification. For example, a history student who asks ChatGPT for primary sources on the 1930s labor movement may receive a list that includes real archives, fabricated archive names, and citation details that are internally plausible but externally unverifiable. The danger is not that the citations look wrong; it is that they look right.

**Current literature** presents a related problem. Most major AI tools have a training cutoff date, a point after which no new information was incorporated, which ranges from one to several years behind the present. For patrons researching fast moving topics such as clinical trials, pharmaceutical approvals, policy changes, or recent legislative developments, AI is actively misleading: the model responds with training data confidence about a landscape that may have changed substantially. For example, a policy student researching current federal AI regulation who asks Claude for an overview will receive information current at the model's training cutoff, presented without any indication of how rapidly the regulatory environment has shifted since. Such outdated information is particularly dangerous because it arrives in the same confident, well organized prose as accurate information.

**Specialized and niche subjects** are underrepresented in AI training data in proportion to how sparsely they were written about during the training period. This affects research support unevenly: a librarian helping a patron with a mainstream topic in psychology or history can reasonably expect more complete training data coverage than a librarian supporting research on an emergent subfield, a non English language scholarship area, or a topic whose primary literature exists in specialized professional databases rather than the general web. For example, a patron researching Indigenous language preservation efforts in a specific region may find that AI synthesizes primarily from a small number of English language sources, producing a response that reflects the anglophone framing of the subject rather than the community centered scholarship that would be most appropriate. Librarians should treat AI coverage of any specialized or underrepresented topic as presumptively incomplete.

**Evaluating source quality** is a task AI cannot perform reliably. A patron who asks AI to identify the most credible or methodologically rigorous sources from a list is asking the model to apply a judgment it has no mechanism to exercise. AI evaluates sources the same way it evaluates everything, by pattern matching to what sounds authoritative, which means it may identify a source as credible based on prestige vocabulary in an abstract rather than on any actual assessment of methodology, peer review status, or scholarly standing. In order to protect patrons from this misunderstanding, the instruction point must be explicit: AI can describe what a source claims; it cannot assess whether those claims are warranted. Source evaluation remains a library professional competency, and it remains necessary regardless of how sophisticated AI responses become.`,
        },
        {
          heading: "Search strategy development: using AI to think through the search, not conduct it",
          body: `Search strategy development is the research support application where AI most clearly earns its place in the consultation workflow, and understanding precisely how it contributes, and precisely where it stops contributing, is the practical knowledge this section develops. The key distinction, which bears repeating to patrons as well as colleagues, is that AI assists with thinking about how to search, not with searching itself. It generates terms, structures, and conceptual frameworks; it does not retrieve records, query databases, or access controlled vocabularies in real time.

The core workflow proceeds in stages that the librarian can model explicitly in a research consultation. First, articulate the research question clearly: the more specific the question the patron provides, the more useful the AI generated search structure will be. For example, a question stated as "the effects of nurse to patient ratios on patient outcomes in intensive care settings" will produce a more targeted set of search terms than "nursing and hospitals." Second, ask AI to generate search terms organized by concept cluster: "Generate search terms for each concept in this research question, including synonyms, related terms, alternate spellings, and relevant controlled vocabulary for PubMed." Such a prompt typically produces a structured set of term clusters that the librarian and patron can review and refine together.

Third, ask AI to suggest Boolean combinations and search string structures. For example, prompting Claude with "Suggest three Boolean search strings using these term clusters, with AND connecting the concepts and OR connecting synonyms within each cluster" produces ready-to-test strings. The librarian's professional role is to evaluate these strings against the specific database's indexing conventions: MeSH terms for PubMed, Thesaurus descriptors for CINAHL, controlled vocabulary for PsycINFO, and adjust accordingly. AI can suggest that a medical search should include MeSH terms; it cannot guarantee that the specific terms it names are current and correctly formatted. Such verification is the librarian's contribution, not an optional addition.

Fourth, iterate in response to database results. When an initial search produces too many or too few results, or retrieves results in the wrong subarea of the topic, the patron can describe this to AI and ask for revised strategies: "My search for these terms returned 3,000 results in CINAHL, most of which are not focused on the intensive care setting. Suggest three strategies for narrowing: adding limiters, adding additional concept terms, or restructuring the Boolean." Such iteration makes the consultation more dynamic and often surfaces search angles that neither the librarian nor the patron had considered independently. It is useful to think of AI as a well read colleague who has processed an enormous quantity of methodology literature and library instruction content; that colleague can generate options quickly, but the librarian's knowledge of specific database indexing is what makes those options actionable.

One additional application worth making explicit: AI can help patrons develop search strategies for databases they have never used, by explaining how a database is structured, what types of sources it covers, and how its search interface differs from familiar tools. For example, a social science student accustomed to Google Scholar who is being introduced to Sociological Abstracts for the first time can ask AI to explain the database's scope, subject heading structure, and most effective search approaches for the discipline. Such orientation reduces the learning curve for new database users in ways that complement rather than replace library instruction, and it positions AI as a preparation tool for library work rather than a replacement for it.`,
        },
        {
          heading: "Summarizing and synthesizing research documents patrons provide",
          body: `The information in mode of AI use (providing documents for AI to process rather than asking AI to generate information from training data) is the highest reliability application in research support contexts, and it is worth developing as a core consultation tool rather than treating it as an incidental capability. When a patron brings documents to an AI interaction, such as abstracts, full articles, PDFs, or reports, and asks AI to help process that content, the hallucination risk drops substantially because the model is working with provided text rather than generating facts from training. Such a distinction should inform how librarians introduce AI use to patrons at the research support stage: emphasize working with sources the patron has already verified over asking AI to generate sources from scratch.

The most immediate application is abstract triage. A patron who has run a database search and retrieved thirty abstracts faces a time intensive reading task, working through all thirty to identify which articles are worth pursuing to full text, which are tangentially related, and which are not relevant at all. AI can perform an initial triage pass by processing the full set of abstracts and organizing them by relevance, methodology, or research focus. For example, a graduate student can paste thirty PubMed abstracts into Claude and ask: "Organize these abstracts into three groups: highly relevant to a systematic review on this topic, moderately relevant and worth reviewing in full text, and tangentially related. For the highly relevant group, note what each one contributes." Such triage reduces a forty five minute reading task to a ten minute review, freeing the patron's time for deeper engagement with the most relevant sources.

For more advanced synthesis tasks (identifying shared themes across a literature, mapping methodological approaches, or characterizing the evidence base for a specific intervention), AI working with provided documents can produce structured syntheses that support rather than replace the patron's own intellectual engagement. In order to use this capability responsibly, librarians should explain to patrons that AI synthesis of provided documents is a starting point for their own analysis, not a finished product. For example, a public health student asking AI to synthesize the methodology sections of twelve provided articles may receive a useful overview of study designs, sample sizes, and outcome measures, but the student must engage with that synthesis critically and confirm key details against the original documents before incorporating it into a literature review.

The limit of this approach is important to communicate explicitly. AI processes provided text and reflects that content back in organized form; it does not have access to the broader literature and cannot tell the patron what the provided documents omit. A patron who synthesizes fifteen articles and concludes that the literature "shows X" has synthesized fifteen articles, not the field. For example, if all fifteen articles happen to represent one methodological tradition or one disciplinary perspective, the synthesis will reflect that perspective without noting its limitations. The librarian's role (identifying that a broader literature search should precede or accompany AI synthesis, and that the patron's selection criteria shape what the synthesis represents) is not displaced by AI's facility with provided documents. Indeed, it becomes more important, because the ease of AI synthesis can create an illusion of comprehensiveness that a narrowly selected document set does not warrant.`,
        },
        {
          heading: "AI native research tools: a librarian's evaluation",
          body: `General purpose AI tools such as ChatGPT, Claude, and Gemini were designed for broad conversational use and carry the hallucination risks in research contexts described in this module's earlier sections. A distinct category of tools has been built specifically to address those risks by grounding AI responses in actual database searches or controlled scholarly corpora. These tools represent a meaningful improvement over general purpose AI for certain research support tasks, and librarians who understand their capabilities and limitations can recommend them credibly to patrons who need AI assistance in contexts where fabricated citations would be professionally or academically costly.

**Connected Papers** (connectedpapers.com) is an AI enhanced discovery tool that visualizes the citation network surrounding a specific paper. A patron enters a known relevant article, and the tool maps both the papers that cite it and the papers it cites, producing a visual graph that makes the intellectual neighborhood of a topic navigable. For example, a sociology graduate student who has identified one foundational paper on their topic can use Connected Papers to surface the cluster of scholarship that has engaged with that paper, discover articles they had not found through keyword searching, and map the structure of the scholarly conversation in their field. Such citation network visualization is particularly valuable in the early stages of a literature review, when a patron needs to understand the landscape of a field before committing to a specific research angle. Connected Papers does not generate text from training data; it retrieves from real citation networks, which means it carries no hallucination risk for bibliographic purposes. It shows connections among documents that actually exist.

**Elicit** (elicit.com) is an AI research assistant that searches Semantic Scholar, a database of over 200 million academic papers, and returns real papers with AI generated summaries drawn from the actual document content. For example, a clinical librarian helping a patron with a systematic review can use Elicit to run structured searches, organize results by study design, and generate comparative summaries across a retrieved set of papers. The distinction from general purpose AI is fundamental: Elicit grounds its responses in real search results from a controlled scholarly database, which substantially reduces hallucination risk for bibliographic content. Such grounding does not eliminate all risk; AI summaries of real papers can still mischaracterize nuanced findings, and Semantic Scholar's coverage is not equivalent to the major licensed research databases, but it is a considerably more reliable starting point for literature review support than asking ChatGPT to find sources. Elicit is most useful for systematic review workflows, rapid literature mapping, and extracting specific data points across a large set of papers.

**Consensus** (consensus.app) takes a complementary approach: it searches peer reviewed papers and attempts to synthesize the overall state of evidence on empirical questions. For example, a patron asking "Does sleep deprivation affect academic performance?" receives a structured response indicating how many papers Consensus found, how the evidence divides across positive and null findings, and links to the actual papers supporting each position. Such evidence mapping is most useful for quick evidence check tasks where the patron needs a rapid orientation to the state of the research before pursuing a deeper literature review. The free tier is genuinely usable for most research support purposes, and the tool handles empirical questions in medicine, psychology, and social science well. It is less effective for humanities topics, historical questions, and highly specialized or emergent research areas that are not well represented in its corpus.

**Perplexity in academic mode** combines AI synthesis with real time web search and includes citations for every response. For research support, it is useful for factual orientation, helping a patron understand the policy context for a research topic, identifying key organizations in a field, or getting a quick overview of a methodology, because the citations allow the patron to verify the AI's characterizations against primary sources. Such verification enabled use is more appropriate than general AI use for the orientation stages of research, though Perplexity does not replace database searching for peer reviewed literature and its summaries carry the same risk of mischaracterization as other AI generated content.

In order to recommend any of these tools to patrons with confidence, librarians should experiment with them personally on topics they know well, so that they can evaluate the accuracy of summaries and the quality of retrieved results before directing patrons to rely on them. Such personal evaluation, including assessing whether Elicit's summaries of articles the librarian has already read are accurate, produces the kind of calibrated, firsthand judgment that credible patron recommendations require.`,
        },
        {
          heading: "Building a research support workflow that integrates AI at appropriate points",
          body: `The most effective way to communicate AI's role in the research process to patrons is not a list of rules but a map of the research workflow with AI's appropriate and inappropriate uses indicated at each stage. Such a map makes the distinction concrete and contextual rather than abstract, and it can be developed as a shareable handout, a consultation framework, or an instructional tool depending on the librarian's setting and patron population.

A research workflow for most undergraduate and graduate work proceeds through recognizable stages: **topic development and question formation**, **literature search and retrieval**, **source evaluation**, **reading and synthesis**, and **writing and citation**. AI's role differs at each stage, and the appropriate distinctions are not difficult to communicate clearly once they have been mapped explicitly.

At the **topic development** stage, AI is genuinely useful. Exploring a topic's scope, generating potential research angles, identifying related fields and interdisciplinary connections, and developing a focused research question from a broad interest are all tasks where AI's brainstorming capabilities serve the patron without requiring verified factual claims. For example, a first year student with a broad interest in climate change can use AI to narrow toward a specific angle (the intersection of climate change and food security in sub Saharan agriculture) before bringing that focused question to the library for database searching. Such use is entirely appropriate and represents a net gain in research preparation.

At the **literature search and retrieval** stage, AI's appropriate role is limited to search strategy development, specifically generating term clusters, Boolean combinations, and database recommendations, and does not extend to finding sources. The student brings the search strategy to actual databases: JSTOR, PubMed, PsycINFO, or whatever the appropriate disciplinary resource is. For example, the workflow instruction for this stage can be stated simply: "Use AI to develop your search terms; use the library database to find the sources." Such a clear two step instruction prevents the most common and consequential research workflow error.

At the **source evaluation** stage, AI should not be used for quality assessment, for the reasons described earlier in this module. The patron must evaluate sources using conventional information literacy criteria (authority, accuracy, currency, coverage, and purpose) applied to the source itself. Such evaluation requires direct engagement with the source and cannot be outsourced to a model that cannot access the actual document or assess its scholarly standing.

At the **reading and synthesis** stage, AI is most useful when the patron has already retrieved and verified the sources. Summarizing an abstract, explaining a methodology section in plain language, identifying the key argument of a dense theoretical paper, or synthesizing themes across a provided set of abstracts are all appropriate uses that work with documents the patron already holds. For example, a student who has retrieved twelve legitimate articles and needs to organize them for a literature review can use AI to produce an initial thematic map from the abstracts, which the student then reviews, adjusts, and develops with their own analytical engagement.

At the **writing and citation** stage, the primary guidance is that AI generated citations must never appear in final work without independent verification, and that AI assistance with prose should be disclosed according to the institution's and instructor's policies. In order to prevent citation fabrication at this stage, the workflow should treat verification as a required step rather than an optional precaution: before any citation is included in a paper, the patron must locate the actual document in a library database. Developing this map as a printable or digital handout for research consultations is among the most immediately practical steps a librarian can take to improve research AI literacy, because a workflow framework gives patrons something concrete to follow, rather than a prohibition to work around.`,
        },
        {
          heading: "Your expanded instruction role: research AI literacy as a core library competency",
          body: `Reference and instruction librarians have always mediated between patrons and information sources that carry specific risks: teaching database searching to users who default to Google, explaining the distinction between popular and scholarly sources to students who cannot recognize it, and building citation verification habits in communities where cutting corners is normalized. AI in research contexts presents the same professional challenge: a powerful tool, widely adopted by patrons before its failure modes are understood, creating predictable errors that the library is positioned to prevent.

What is new is not the challenge but the scale and the speed. Students and faculty are adopting AI research workflows faster than institutions can develop formal guidance, which means librarians are encountering AI related research errors in reference consultations, embedded instruction sessions, and research help desk tickets before any institutional response is in place. In order to address this effectively, librarians need a proactive instruction approach rather than a reactive correction approach: teaching appropriate research AI use as part of standard library instruction, not as a specialized add on for students who are already in trouble.

The instruction content that matters most at the research support level falls into three categories. First, **workflow instruction**: explicitly teaching patrons where AI fits and does not fit in the research process, using the workflow map described in the prior section. This is most effective when delivered in the context of a specific assignment rather than as a general AI literacy session, because contextual specificity produces more durable behavior change than abstract instruction. For example, a single shot session for a research methods course can include five minutes on the appropriate AI workflow for the literature review required in that course, addressing this specific assignment, this database, and this citation requirement rather than AI in general.

Second, **live demonstration**: showing students what AI citation fabrication looks like by attempting to locate an AI generated citation in a database during the instruction session, as described in Module 05. Such a demonstration is more effective at shifting behavior than any verbal explanation, because it makes the abstract failure mode experiential. In order to make the demonstration most effective, choose a topic relevant to the course and use a general purpose AI tool the students are already using, which prevents the dismissive response that a different tool would not produce the same errors.

Third, **verification as a professional norm**: positioning citation verification not as a corrective response to AI errors but as a professional expectation that applies to all research workflows. For example, framing verification as "the step every professional researcher takes before citing" rather than "the step you need to take because AI is unreliable" produces more sustainable behavior because it connects the practice to professional identity rather than to AI specific anxiety. Such framing is accurate; professional researchers do verify citations routinely, and it positions the librarian as teaching a universal research skill rather than managing an AI problem.

Additionally, the reference consultation workflow itself can be updated to integrate AI awareness. When a patron brings a research question, a natural part of the interaction is now asking: "Have you started working with any AI tools on this project? Let's take a look at what you have." Such a question normalizes the librarian's role in AI assisted research without assuming either that the patron has or has not used AI, and it opens the opportunity to redirect problematic workflows before they produce academic integrity issues or wasted research effort. Indeed, the library's capacity to provide this kind of consultative guidance in AI assisted research is one of the strongest arguments for the profession's continued relevance in an information environment where patrons have increasing access to powerful self service tools.`,
        },
      ],
      practitionerNote:
        "One structural change that proves effective is adding a source check as a standard opening step in any consultation where a patron mentions AI use. When a student says they used AI to find sources, asking to see their list and looking up one citation together takes approximately five minutes and almost always reveals at least one fabricated or inaccurate citation. That single step accomplishes more instruction than any amount of prior explanation. It also establishes, early in the consultation, that the librarian's role is not to warn the student about AI but to work alongside them as a research partner. In order to implement something similar without restructuring every consultation workflow, simply adding one opening question to the standard consultation intake makes a measurable difference: 'Have you used any AI tools so far in this project?' The answer shapes the rest of the interaction more usefully than almost any other piece of information, and it signals to patrons that AI related questions are expected and welcome in the library, not treated as a confession.",
      summary: [
        "AI is most reliable in research support when working with documents the patron has already retrieved; summarizing provided content carries far lower hallucination risk than asking AI to find sources.",
        "AI cannot search databases: when asked to find peer reviewed articles, it generates seemingly credible citations from training data, many of which will not correspond to real publications.",
        "Search strategy development is the highest value research support application; use AI to generate term clusters, Boolean combinations, and subject heading suggestions, then take those to the actual database.",
        "AI native tools (Elicit, Connected Papers, Consensus) ground responses in actual scholarly databases and carry substantially lower hallucination risk than general purpose AI for bibliographic work.",
        "A workflow map (AI for topic development and search strategy, databases for retrieval, librarian judgment for source evaluation) is the most practical instructional tool for communicating appropriate AI use in the research process.",
        "The librarian's instruction role has expanded: teaching research AI literacy through workflow instruction, live citation demonstration, and verification as a professional norm is now a core component of single shot sessions and reference consultations.",
      ],
    },
  },

  {
    id: 7,
    slug: "reference-and-instruction",
    title: "Reference & instruction",
    level: "applied",
    audience: "practicing",
    acrlCompetencies: ["application"],
    acrlSubCompetencies: ["4.1", "4.2", "4.3"],
    topics: [
      "Drafting and improving subject guides with AI assistance",
      "AI enhanced lesson plan development",
      "Teaching information literacy in an AI world",
      "Faculty collaboration on AI syllabus policies",
      "Patron communication: emails, FAQs, signage",
    ],
    objectives: [
      "Use AI to draft or improve a subject guide for a specific course or discipline",
      "Develop a library instruction lesson plan using AI as a drafting partner",
      "Create patron facing AI use guidance appropriate for a specific population",
      "Draft a faculty consultation framework for AI policy questions",
      "Apply AI to at least three patron communication tasks in your daily workflow",
    ],
    estimatedMinutes: 25,
    status: "published",
    isGap: false,
    description:
      "Reference and instruction are where librarians spend the most time, and where AI provides the most immediate daily utility. This module is entirely practical: real tasks, real prompts, real time savings.",
    relatedModules: [
      "ai-for-research-support",
      "talking-to-ai-effectively",
      "prompt-library-for-library-work",
    ],
    content: {
      intro:
        "AI fits into instruction work in ways that produce genuine and measurable time savings, particularly for drafting, refining, brainstorming, and adapting content for different audiences. Not for everything; there are tasks where it would be slower than just doing the work directly. The functions where librarians spend the most time, including drafting LibGuides, developing lesson plans, responding to patron email, and collaborating with faculty on policy questions, are precisely the functions where AI's drafting and revision capabilities are most useful. In order to benefit from those capabilities without making the professional errors that come from uncritical adoption, a librarian needs to understand both how to use AI effectively for instruction work and where the professional judgment that AI cannot provide remains essential.",
      sections: [
        {
          heading: "Subject guides: drafting, improving, and adapting with AI assistance",
          body: `Creating a new subject guide from scratch is one of the most time consuming routine tasks in reference and instruction work. The structural thinking, the description writing, the introduction copy, the organization of resources into logical tabs: each component is individually manageable, but together they constitute a substantial time investment for a task that may need to be completed quickly when a faculty member makes a last minute instruction request. AI is well suited to accelerate the structural and editorial components of guide creation, while the librarian's professional knowledge of the actual resources remains essential and irreplaceable.

The most efficient workflow for guide creation proceeds in stages that the librarian can learn to execute quickly once the pattern is established. First, provide AI with the context it needs to generate a useful structure: the subject area, the course level and institution type, the patron population, and the assignment the guide will support. For example: "I am creating a LibGuide for a sociology research methods course at a community college. Students will be writing an original research proposal with a literature review section. Suggest a logical tab structure for the guide and what each tab should include." Such a prompt typically produces a reasonable starting structure in seconds, though not necessarily the final structure the librarian will use, but a scaffolding to react to and revise. Reacting to a draft is consistently faster than generating structure from scratch.

Second, use AI for description writing once the structure is set. Database descriptions, section introductions, and annotated resource entries are repetitive writing tasks that consume significant time and benefit from AI drafting. For example: "Write a 60-word description of JSTOR for undergraduate sociology students who are searching for peer reviewed articles for the first time. Plain language, no jargon, emphasize what types of content students will find and how to access it from off campus." Such a prompt produces usable descriptive text that the librarian reviews and adjusts for accuracy, rather than starting from a blank field. Furthermore, the same prompt structure can be applied across multiple resources once the pattern is established, converting what was a forty five minute description writing session into a ten minute review and edit process.

Third, AI is equally useful for improving existing guides rather than only creating new ones. A librarian with a five year old guide that has accumulated outdated language, unclear descriptions, and inconsistent tone can paste individual sections into AI and ask for revision: "Here is a section of my library guide on evaluating sources. Rewrite it for first generation college students who may be unfamiliar with library terminology. Plain language, no jargon, welcoming tone, under 100 words." Such revision passes are considerably faster than rewriting from scratch, and they can be applied selectively to the sections most in need of updating while leaving well functioning sections unchanged.

The professional boundary that matters is the one between editorial and substantive content. AI can write the introduction to a guide, draft descriptions of resources, and suggest organizational structures. It cannot identify which databases are actually appropriate for a given subject area, assess whether a database's coverage is current and relevant to the patron population, or verify that resources it names are available through the institution's subscriptions. Such professional judgment is the librarian's contribution, and it remains the central, irreplaceable component of guide quality even when AI handles the writing.`,
        },
        {
          heading: "Lesson plan development: AI as an instruction design partner",
          body: `Library instruction sessions follow recognizable structural patterns (learning objectives, content sequence, active learning activities, closing assessment) that AI can scaffold reliably for any new context. The challenge is not generating a lesson plan structure; it is generating one that is appropriate for the specific course, assignment, audience, and time constraints a librarian faces. AI is substantially better at this contextual adaptation when the librarian provides rich context in the prompt rather than a generic request.

The most useful prompting approach involves specifying four variables: the patron population and course context, the assignment the session is supporting, the available time, and the specific learning outcome the librarian wants to prioritize. For example: "I have 50 minutes with a first year English composition class whose students are starting their first academic research paper. They will be using Academic Search Complete and the library catalog. The instructor has asked me to focus on finding and evaluating peer reviewed sources. Generate a lesson plan with a hook, two or three content segments, an active learning activity, and a closing. Active learning should require students to do something, not just watch." Such a prompt produces a structured session plan that the librarian can review, adjust, and execute, rather than spending preparation time on structural decisions that could be delegated.

AI is also useful for generating the variety of activity options and assessment questions that make instruction planning genuinely creative. When a librarian asks for five different ways to demonstrate Boolean searching rather than one, the list almost always contains an approach she would not have arrived at independently. For example, a prompt such as "Give me five different active learning activities for teaching database Boolean searching to first year students, ranging from low tech to digital, each taking no more than ten minutes" may produce a mix of familiar approaches and genuinely novel ideas. Such variety is particularly useful when planning for different course contexts that require different pedagogical approaches, given that the same content delivered to an honors seminar versus a developmental writing course requires very different activity design, and generating options quickly allows the librarian to select appropriately.

The single shot instruction challenge (designing a session that achieves meaningful learning outcomes in a single fifty minute encounter) is well served by AI's ability to help prioritize. A librarian uncertain whether to cover database searching, source evaluation, or citation management in a constrained time slot can ask AI to reason through the tradeoffs: "I have 30 minutes with a criminal justice seminar. The students need to know how to find peer reviewed sources and how to evaluate them. I cannot cover both well in this time. Which should I prioritize given this population and assignment type, and what is the most efficient way to briefly address the other?" Such a structured prompt helps the librarian make a principled decision rather than defaulting to whatever was covered last time. In order to get the most useful response, the prompt should include any relevant information about what students already know and what the assignment actually requires.

Additionally, AI is valuable for generating formative assessment questions, discussion prompts, and session evaluations: the components of instruction design that require creativity but not subject expertise. For example: "Write three exit ticket questions I could use at the end of a single shot session on database searching to assess whether students can identify the difference between a popular and a peer reviewed source. Questions should take under two minutes to answer and be usable as a quick paper slip." Such assessment tools strengthen instruction design without requiring additional preparation time, and the resulting questions can be saved and adapted across multiple sessions.`,
        },
        {
          heading: "Adapting instruction content for different audiences and contexts",
          body: `One of the most time consuming dimensions of library instruction work is not creating new content but adapting existing content for new audiences and contexts. A lesson plan developed for a nursing seminar requires substantial revision to serve a history capstone course. A LibGuide written for graduate researchers needs to be reframed for community college first year students. A patron FAQ appropriate for a research university population may be entirely unsuitable for a public library community. AI is exceptionally well suited to this adaptation work, and developing a reliable adaptation workflow is among the highest return AI practices available to instruction librarians.

The adaptation workflow proceeds from a clear prompt structure: provide AI with the existing content, specify the original context, describe the new audience, and give format guidance. For example: "Here is a handout I developed for a graduate research seminar on database searching. Rewrite it for first generation community college students who have never used an academic database and may be anxious about library research. Same information, accessible language, welcoming tone, no library jargon, under two pages." Such a prompt produces a genuinely reworked document rather than a superficially revised version, because the audience specification gives AI the information it needs to make meaningful changes to vocabulary, examples, assumed knowledge, and tone.

Reading level adjustment is one of the most practically useful adaptations AI can perform. A librarian working with a patron population that includes English language learners, students with reading disabilities, or community members unfamiliar with academic vocabulary can use AI to adjust existing library content to a specified reading level consistently and quickly. For example: "Rewrite this database search tutorial for a sixth grade reading level. Keep all the factual content but simplify vocabulary and sentence structure. Add brief explanations of any library terms that cannot be avoided." Such a revision preserves the professional content of the original while making it genuinely accessible to a wider patron population: a significant service expansion that would otherwise require hours of careful rewriting.

Furthermore, AI is useful for repackaging the same content in different formats for different delivery contexts. A detailed lesson plan can be condensed into a single page handout; a handout can be expanded into a slide deck outline; a slide deck can be revised into a self paced LibGuide tutorial. For example, a librarian who has developed a strong single shot lesson plan can ask AI to generate a condensed version for a fifteen minute embedded session, a self paced version for asynchronous delivery through the course management system, and a single page quick reference card for students to keep. Such format multiplication from a single base document is one of the most efficient uses of AI in instruction work; the core content is developed once, and AI handles the structural adaptation. Indeed, for librarians whose instruction programs serve many course formats and delivery contexts, this single workflow can reduce content development time substantially across an entire semester.`,
        },
        {
          heading: "Teaching information literacy in an AI world: updating the framework",
          body: `The ACRL Framework for Information Literacy was developed before generative AI became a mainstream tool, and most of its six frames remain as relevant as ever, but the examples, entry points, and instruction strategies that bring those frames to life require updating for the current information environment. AI has not replaced the framework; it has created new occasions for each frame to become visible to students in ways that earlier information environments did not provide.

The **Authority is Constructed and Contextual** frame is the most directly implicated. AI has no authority in the framework's sense; it does not derive credibility from institutional position, expertise, peer review, or community recognition. It synthesizes patterns from sources that may or may not carry authority, without preserving or communicating the authority of those sources. For instruction purposes, this frame provides the vocabulary for a productive conversation: rather than telling students that AI is untrustworthy, the librarian can ask students to articulate what makes a source authoritative and then apply that framework to AI output. For example, an instruction activity might ask students to evaluate an AI generated paragraph using the same authority criteria they would apply to a news article or a database result, and to identify what is different about a source that has no author, no institution, no publication history, and no peer review.

The **Information Creation as a Process** frame connects directly to how AI generates text. Students who understand, even conceptually at the level covered in Module 01, that AI text is produced through statistical prediction rather than research, expert judgment, or evidence evaluation will evaluate AI output more accurately than students who treat it as a search result. In order to teach this frame in an AI context, librarians can design activities that make the creation process visible: asking students to compare how a Wikipedia article, a peer reviewed journal article, and an AI response are each produced, and identifying what quality controls apply to each. Such comparison makes the production process, which is invisible in the final text, becomes a subject of critical attention.

**Searching as Strategic Exploration** is the frame most frequently violated by student AI use. Students who use AI as a search tool, asking it to find sources rather than using it to develop search strategies, are applying a search logic to a generation tool. In order to teach this frame in an AI context, instruction should make the distinction between generation and retrieval experiential rather than explanatory: show students what happens when they ask AI for sources (hallucinated citations), then show what happens when they use that same topic in a database search (actual retrievable documents). Such a demonstration, taking five to ten minutes in a single shot session, produces more durable conceptual change than any amount of verbal explanation.

The **Research as Inquiry** frame provides useful language for the librarian's role in an AI environment. Inquiry involves forming questions, evaluating evidence, reaching conclusions, and revising them: an iterative process of intellectual engagement that AI can support at specific points but cannot conduct on the patron's behalf. For instruction purposes, this frame is most useful when teaching students that AI assistance is appropriate when it supports their inquiry and inappropriate when it substitutes for it. Such a distinction (AI as inquiry support versus AI as inquiry replacement) is the conceptual foundation of appropriate research AI use, and the ACRL Framework provides the professional vocabulary to teach it clearly. Additionally, for librarians who teach embedded instruction and have ongoing relationships with courses, this framing gives students a durable evaluative principle that applies beyond any single session or assignment.`,
        },
        {
          heading: "Working with faculty on AI syllabus policies",
          body: `Faculty are consulting librarians about AI syllabus policies at an increasing rate, not always because librarians have actively positioned themselves as the appropriate resource, but because the intersection of academic integrity, information literacy, disciplinary norms, and assignment design that AI policy questions involve is genuinely library territory. Librarians who develop a clear consultation framework for these conversations will find themselves in a professional role that strengthens the library's relationship with faculty across disciplines and that directly serves the institution's need for coherent, pedagogically grounded AI guidance.

The consultation approach that works most consistently begins with the assignment's learning objectives rather than with the AI question. Faculty who arrive asking "Should I allow AI in this assignment?" are asking a policy question; what they need is a learning design conversation. In order to redirect productively, the librarian can open with: "Let's start with what this assignment is meant to develop in your students. Once we understand what learning the assignment is supposed to produce, we can identify what forms of AI use support that learning and what forms undermine it." Such a reframe shifts the conversation from prohibition versus permission (a false binary) to purposeful design, which is where the librarian's information literacy expertise is directly applicable.

AI can assist with the consultation itself. A librarian preparing for a faculty meeting on AI policy can ask Claude to generate a range of policy examples organized by restriction level (from fully restricted to fully permitted with disclosure required), drawn from the growing body of publicly available higher education policy language. For example: "Generate five examples of AI syllabus policy language representing different levels of restriction. Include a single sentence rationale for each level and note what assignment types each level is most appropriate for." Such a prepared overview gives the faculty member concrete language to react to, which is considerably more productive than a blank policy drafting session. Furthermore, the librarian's role in the consultation is not to advocate a particular policy position but to help the faculty member think clearly about what the assignment's learning goals require and what policy language accurately expresses those goals.

Additionally, librarians can help faculty think through the practical dimensions of AI policy that are often overlooked in initial drafting: how students will be expected to document their AI use, what constitutes required disclosure, what the consequences of policy violation are, and how the policy aligns with the institution's broader acceptable use standards. For example, a faculty member who writes "AI is not permitted" without specifying what counts as AI use (grammar checkers, autocomplete, translation tools) is creating an ambiguous policy that generates more confusion than clarity. Such specificity is the contribution the librarian's information and policy background enables, and it improves the policy's practical effectiveness in ways that faculty who are expert in their disciplines but not in information policy may not anticipate.

There is no doubt that the library's position in faculty AI policy conversations is strongest when the librarian arrives with preparation: examples from peer institutions, a working knowledge of the ACRL and ARL guidance documents, and familiarity with what the institution's own AI acceptable use policy requires. Such preparation signals that the library is a substantive resource for this conversation, not merely a referral destination, and it establishes the kind of faculty partnership that supports instruction programs and collection decisions far beyond the immediate AI policy question.`,
        },
        {
          heading: "Patron communication: drafting for every audience and channel",
          body: `Patron facing communication (emails, FAQs, website content, signage, newsletter items, social media posts, handouts) represents one of the highest return, lowest risk applications of AI in library work. The tasks are repetitive and structurally familiar, the outputs are reviewed before use, and the efficiency gains are immediately visible. Such conditions make patron communication the natural starting point for librarians experimenting with AI for the first time, and the application where the professional case for AI use is easiest to demonstrate to skeptical colleagues.

Reference email response is the most immediately useful application for most reference and instruction librarians. A librarian who spends twenty minutes drafting a careful, patron appropriate response to a common research question can reduce that time substantially by asking AI to draft the response and then editing for accuracy and personalization. For example: "Draft a friendly, helpful email response to the following reference question from a community college student: [paste question]. The student should be directed to Academic Search Complete for this topic. Warm and accessible tone, under 200 words, offer to follow up if the student needs help." The resulting draft typically requires editing and accuracy review but is structurally sound and covers the essential elements. Such drafting is particularly useful for questions that require explaining database search to a patron who may be unfamiliar with library resources; the structural explanation is delegated to AI, and the librarian's time is spent on the elements requiring professional judgment.

FAQ content for library websites and LibGuides is well suited to AI drafting because the format is standardized and the patron population is knowable. For example, a librarian developing FAQ content for a new interlibrary loan service page can ask AI to draft answers to common ILL questions in plain language appropriate for undergraduate students, then review and adjust the content for accuracy against the library's actual ILL procedures. Such a workflow produces a complete FAQ draft in considerably less time than writing from scratch, with the important professional step of verifying every procedural claim, since AI may generate plausible ILL procedures that do not match how the specific institution's service actually operates.

Signage, handouts, and print communication benefit from AI's ability to condense complex information into brief, patron accessible language. For example: "Write a 50-word sign explaining how to access library databases from off campus, for students who do not know what a proxy server is. Plain language, no jargon, focus on what the student needs to do, not how the technology works." Such a prompt produces immediately usable sign text that the librarian reviews for accuracy and adjusts for institutional branding. In order to produce patron communication that reflects the library's voice consistently across channels, it is useful to provide AI with a brief institutional description and sample existing communications; the resulting output will more closely match the established tone and register. Indeed, once a librarian has developed a prompt that produces patron communication in the library's voice reliably, that prompt becomes a reusable template for every subsequent communication task of the same type.`,
        },
        {
          heading: "Building a sustainable AI assisted instruction practice",
          body: `The efficiency gains available from AI in reference and instruction work are real, but they accumulate most reliably for librarians who develop deliberate, systematic practices rather than using AI ad hoc for individual tasks. A librarian who restates her institution and patron population context to the AI at the start of every AI session is losing half the value that custom instructions or persistent project contexts provide. A librarian who drafts each LibGuide introduction independently is not building on the successful patterns she has already developed. In order to realize the full efficiency available, a sustainable practice requires investment in three dimensions: persistent context, accumulated resources, and shared team knowledge.

Persistent context means setting up AI tools so they know, across every conversation, who the librarian is and what professional context shapes her work. As described in Module 02, custom instructions in ChatGPT, persistent project contexts in Claude, and similar features in other tools allow the librarian to specify institution type, patron population, preferred tone, and professional norms once rather than in every session. For example, an instruction librarian at a community college might set up custom instructions that include: "I work at a community college with a large first generation student population. I am an instruction and reference librarian. My content should always use plain language, avoid academic jargon, and assume students may be anxious about library research." Such persistent context changes the quality of every subsequent output without requiring the librarian to reestablish it each time, and it represents a one time investment that returns value across every future session.

Accumulated resources refers to building a repository of AI drafted content that has been reviewed, approved, and used: the LibGuide introductions that tested well, the email templates that patrons found helpful, the lesson plan elements that worked in specific course contexts. Such a repository serves two purposes: it provides ready made content for adaptation to new but similar situations, and it preserves the successful prompts that produced it. For example, a LibGuide introduction that AI drafted and the librarian approved becomes both a usable document and a model prompt; the librarian can return to the original prompt, adjust the course and discipline specifics, and rapidly produce a new introduction for a different guide. Module 10 covers building and maintaining a prompt library systematically; the principle here is that every successful AI output is also a prompt pattern worth saving.

Shared team knowledge represents the practical dimension of sustainable AI practice that individual effort cannot replicate. Such knowledge is most valuable when shared with library colleagues, who are otherwise required to discover the same effective approaches independently. For example, a team of three instruction librarians who each develop their own AI practices independently may arrive at different approaches, with different levels of efficiency, without ever comparing results. A brief team discussion (what prompts have worked for lesson plan development? what context specifications produce the most consistent output?) develops a shared vocabulary for AI assisted instruction work that benefits the entire team. There is no doubt that the most sustainable institutional AI practice is one that is collective rather than individual, documented rather than implicit, and revisited regularly as tools and institutional needs evolve.`,
        },
      ],
      practitionerNote:
        "The task that consistently converts skeptical colleagues is demonstrating AI on a recognizable, unglamorous task: drafting a LibGuide introduction in three minutes and editing it in two more. Once a colleague sees AI save time on a task they recognize as genuinely tedious, the conversation shifts from 'should we use this' to 'what else can we use it for.' The most effective demonstration task is not AI for a complex instruction challenge but AI for the kind of routine, time consuming writing task every librarian has on their list. The efficiency is visible immediately, and visible efficiency is the most persuasive argument available. The professional questions about appropriate use and verification follow naturally once the efficiency case has been made, and those are conversations worth having, because they build the kind of deliberate, calibrated practice that produces real institutional value.",
      summary: [
        "AI accelerates the editorial components of subject guide creation (structure, descriptions, introductions) while the librarian's knowledge of actual resources and database coverage remains irreplaceable.",
        "Effective lesson plan prompts specify four variables: patron population, the assignment being supported, available time, and the specific learning outcome to prioritize.",
        "Adapting existing content for new audiences (adjusting reading level, reformatting for different delivery contexts, rewriting for different patron populations) is among the highest return AI practices available to instruction librarians.",
        "The ACRL Information Literacy Framework remains the right conceptual foundation for AI instruction; the frames of Authority, Creation, Searching, and Inquiry each have direct application to AI evaluation.",
        "Faculty AI syllabus policy consultations are most productive when the librarian reframes the question from 'allow or prohibit' to 'what does this assignment's learning objective require.'",
        "A sustainable AI instruction practice requires three investments: persistent context that eliminates repetitive setup, accumulated resources that build on successful prompt patterns, and shared team knowledge that multiplies individual efficiency.",
      ],
    },
  },

  {
    id: 8,
    slug: "metadata-and-cataloging",
    title: "Metadata & cataloging",
    level: "applied",
    audience: "digital",
    acrlCompetencies: ["application", "analysis"],
    acrlSubCompetencies: ["4.1", "3.4", "4.4"],
    topics: [
      "AI assisted metadata generation",
      "Automated subject tagging and classification",
      "Cleaning and normalizing catalog records",
      "MARC records and AI assisted enhancement",
      "Tools like AERIE and emerging cataloging AI",
    ],
    objectives: [
      "Apply AI to a batch metadata cleaning task in your current workflow",
      "Evaluate at least one AI assisted metadata tool relevant to your collection",
      "Identify where AI assisted subject tagging adds value and where human review is required",
      "Draft a workflow for AI assisted record enhancement in your system",
      "Understand the limitations and bias risks in automated classification",
    ],
    estimatedMinutes: 20,
    status: "published",
    isGap: false,
    description:
      "Metadata work is labor intensive, detail oriented, and increasingly supported by AI tools. This module covers the real state of AI in cataloging: where it saves hours, where it introduces errors, and how to design quality controlled workflows.",
    relatedModules: [
      "digital collections-discovery",
      "ai-library-systems-integration",
      "automating-repetitive-tasks",
    ],
    content: {
      intro:
        "Cataloging and metadata work is, in certain respects, the library function most naturally suited to AI assistance: it involves pattern recognition, classification decisions, and normalization tasks that recur at scale across large and growing collections. At the same time, it is the function where errors are most consequential over time, because a poor subject heading or a mislabeled record degrades discoverability in ways that are difficult to detect and costly to correct at scale. In order to integrate AI into cataloging and metadata workflows responsibly, a digital librarian needs to understand both where AI accelerates the work without sacrificing quality, and where professional judgment remains the only reliable quality control available.",
      sections: [
        {
          heading: "Where AI adds genuine value in metadata work",
          body: `The most reliable applications of AI in metadata work share a characteristic familiar from research support and instruction contexts: AI is most useful when working with content the professional has already assembled, rather than generating metadata from training data alone. AI that receives an item's title, abstract, table of contents, and existing partial record and generates candidate subject headings or a descriptive summary is operating from provided content, which carries lower hallucination risk and higher practical reliability. AI asked to produce authoritative catalog records from a title string alone is generating from training data patterns, with the attendant risk of confident errors.

**Batch record cleaning and normalization** is the area of most immediate practical value for most cataloging workflows. Collections accumulated over decades carry inconsistencies: date formats that vary across cataloging eras, name authority entries appearing in multiple forms, controlled vocabulary terms that have been superseded, encoding errors affecting display and indexing, and MARC field inconsistencies that cause problems in ILS export and discovery. AI given a clear normalization ruleset and a batch of records can identify inconsistencies, flag records requiring attention, and apply standardized corrections at a scale that would require hundreds of hours of manual review. For example, a digital librarian managing a historical collection with inconsistent birth and death date formatting across several thousand records can provide Claude with a CSV export, a description of the target format, and a few examples, and receive a corrected output for review. Such a task requires no professional classification judgment from AI, only consistent rule application, which is among the most reliable AI capabilities.

**Subject heading suggestion** from provided item content is a second area of consistent value. For items with inadequate description (digitized photograph collections where records contain only title and date, or dissertation repositories where records carry no subject headings at all), AI can generate candidate subject headings based on provided content. For example, providing Claude with a dissertation abstract and asking it to suggest LCSH compliant subject headings produces a candidate list that a cataloger reviews, accepts, rejects, or modifies, rather than constructing the list from scratch. Such suggestions require professional review against the actual LCSH vocabulary and item content, but they provide a starting point that substantially reduces per record processing time.

**Description generation** for digital collections addresses one of the most common digitization bottlenecks: items have been technically processed, but minimal records without descriptive text limit their discoverability. AI can draft catalog descriptions from provided metadata, OCR text, or transcription content, which catalogers review and refine. For example, an archivist working with digitized correspondence can provide AI with letter transcriptions and ask it to draft three to five sentence catalog descriptions capturing sender, recipient, date, and primary subject. Such drafts accelerate the description workflow while leaving the substantive accuracy review in professional hands: the appropriate division of labor between AI efficiency and human expertise.`,
        },
        {
          heading: "Batch record cleaning and normalization: a practical workflow",
          body: `The workflow for AI assisted batch record cleaning is straightforward enough to implement immediately, but successful execution depends on the quality of the instructions provided to the AI rather than on the model's autonomous judgment. Such clarity is the professional contribution that makes AI batch processing reliable: the normalization rules come from the cataloger, not from the model.

The workflow proceeds in four stages. First, identify the specific normalization problem to address: inconsistent date formatting, name authority variants, outdated controlled vocabulary terms, or missing MARC fields of a specified type. Being precise about the scope prevents AI from making changes beyond the intended correction. For example, a task specified as "normalize all 100 field entries to match AACR2 format, no other changes" is more reliable than "improve the name authority entries"; the first gives AI a specific rule to apply, while the second invites judgment it is not qualified to exercise.

Second, prepare a representative sample of records in a format AI can process, typically a CSV export with relevant fields or MARC records converted to a readable format. Provide AI with three to five examples of the current format alongside the target format, making the transformation rule explicit rather than inferred. For example: "The 100 field currently reads 'Smith, John (1945-).' The target format is 'Smith, John, 1945-' (note the removal of parentheses). Apply this transformation to all 100 fields in the attached records and flag any record where the date information is ambiguous or missing." Such explicit instruction produces consistent output that the cataloger can verify efficiently.

Third, process the output on a sample before committing to the full batch. Running AI corrections on fifty records before applying them to five thousand is not overcautious; it is the quality control step that catches misapplication of rules before the error is compounded across the entire collection. For example, a normalization rule that works correctly for most name authority formats may fail on compound surnames, names with prefixes, or non Western name structures that follow different ordering conventions. Catching such failures in a sample prevents them from propagating through the full collection. Such a pilot step should be standard practice for any AI batch processing task, regardless of how clearly the rules were specified.

Fourth, document the transformation rules applied as part of the collection's maintenance record. Such documentation is valuable both for quality audit purposes (if a systematic error is discovered later, knowing what rule was applied identifies which records to check) and for reproducibility, since the same normalization approach can be applied to new accessions without reconstructing the workflow from scratch. Indeed, a well documented normalization workflow becomes a reusable institutional resource that builds in value over time.`,
        },
        {
          heading: "AI assisted subject heading suggestion: workflow and professional oversight",
          body: `AI assisted subject heading suggestion is among the most directly labor saving applications in cataloging, and among the most professionally significant for quality control. The efficiency gains are real: reducing per record cataloging time by providing candidate headings rather than requiring the cataloger to construct them from scratch is a measurable workflow improvement, particularly for large backlogs or high volume digitization projects. The professional responsibilities are equally real: candidate headings require review against the actual controlled vocabulary, the item's content, and the library's local practice.

The practical workflow for subject heading suggestion follows the information in principle. Provide AI with as much item content as is available: title, abstract or summary, table of contents, any existing partial metadata, and a description of the collection context. For example: "Suggest LCSH subject headings for an academic dissertation with the following abstract: [paste abstract]. The library uses LC subject headings without local modifications. Suggest between three and five headings, ordered from most to least specific, and note which headings you are less confident about." Such a prompt produces a candidate set from which the cataloger selects, adjusts, and authorizes against the actual LCSH authority file.

The most important quality control dimension is the verification step: every AI suggested subject heading must be confirmed against the LCSH authority file before being applied. AI suggestions will sometimes use outdated terminology, produce seemingly plausible headings that do not exist in the controlled vocabulary, or apply headings that are real but that the specific item's content does not fully warrant. For example, AI might suggest a broad geographic or demographic heading for an item that would be better served by a more specific term, not a fabrication but a professional judgment error that requires the cataloger's expertise to identify. Additionally, AI suggestions for items in specialized, technical, or interdisciplinary subject areas carry higher imprecision risk, because the relevant controlled vocabulary may be less well represented in the model's training data than mainstream disciplinary literature.

Furthermore, subject heading suggestion for items about communities and experiences that have been historically underrepresented or misrepresented in LCSH requires heightened professional attention. AI trained on existing catalog records inherits the vocabulary of those records, including terminology that contemporary reparative cataloging practice recognizes as inadequate or harmful. This dimension of AI assisted subject cataloging is examined more fully in the section on bias and representation, and it is the reason that "AI suggests" can never be treated as equivalent to "cataloger authorizes" in any responsible workflow.`,
        },
        {
          heading: "Description generation for digital and archival collections",
          body: `Description generation is the AI application with the clearest return on investment in digital collections work, because the bottleneck it addresses, namely the gap between digitized items that have been technically processed and items described thoroughly enough to be discoverable, is a persistent challenge for nearly every digital collections program. Staff time for original description work is limited; the number of items requiring description is not. AI's ability to draft descriptions from provided content shifts the work from origination to review, a substantial efficiency gain that makes backlogs tractable without sacrificing the professional oversight that description quality requires.

The most reliable approach is to provide AI with every relevant piece of content available for the item: digitized text if OCR is available, existing partial record fields, physical description, provenance information, and collection context. For example, for digitized historical correspondence, a prompt might read: "Write a 75-word catalog description for the following letter based on the provided transcription: [paste transcription]. The description should identify the sender, recipient, date, primary subject, and any significant details that would help a researcher determine relevance. Write in past tense, third person, plain professional language." Such a prompt produces a description the archivist reviews for accuracy and completeness rather than drafting from scratch; the professional's time is spent on verification and refinement rather than on initial origination.

The professional review step is where AI drafted descriptions most commonly require correction. AI may infer geographic settings incorrectly from sparse metadata, misidentify persons or institutions from context clues in the text, assign dates with more precision than the evidence warrants, or describe images in ways that reflect training data biases about what subjects and settings look like. For example, a photograph labeled only "Community gathering, 1930s" may receive an AI description that assumes a specific ethnic or regional community based on visual pattern matching from training data; such an assumption may be factually incorrect and that carries representational significance. Such errors require professional correction, and they are the reason that description review must be substantive rather than cursory.

For archival finding aids, AI description generation serves a specific and well defined function: converting container level entries with minimal description into more fully described series and box summaries that improve discoverability without requiring item level cataloging for every folder. For example, a large archival collection where series level descriptions are adequate but box level descriptions are absent can be approached with AI drafting box descriptions from the folder titles within each box: a pattern based task that AI handles reliably when the folder level data is provided as context. Such an approach does not replace the archivist's professional interpretation of the collection's significance; it extends that interpretation to a level of granularity that would otherwise require far more staff time than is available. Furthermore, AI drafted finding aid descriptions can be reviewed at a pace that matches staff availability, which makes the approach sustainable for ongoing digitization programs rather than only for one time retrospective projects.`,
        },
        {
          heading: "Bias and representation in automated classification",
          body: `Automated classification systems inherit the biases of their training data. In library cataloging, this is not a theoretical concern; it is a direct professional issue with consequences for collection discoverability and community representation that practicing catalogers encounter in specific, identifiable ways. AI systems trained on existing catalog records will replicate and in some cases amplify the biases embedded in those records, and librarians deploying AI assisted classification need to understand this mechanism well enough to design workflows that catch and correct for it.

The Library of Congress Subject Headings vocabulary has been the subject of sustained professional critique for decades, with scholarship and community advocacy documenting systematic inadequacy in the representation of Indigenous communities, LGBTQ+ people and experiences, communities of color, non Western cultural and intellectual traditions, and many other historically marginalized groups. The problems are not limited to obviously offensive historical terms; they include structural issues such as the use of dominant culture framing as the unmarked default, the absence of subject headings that reflect community self identification, and the granularity imbalance that provides detailed vocabulary for Western European topics while providing much coarser vocabulary for topics involving non Western cultures and communities. For example, LCSH has historically provided far more granular terms for the political and cultural histories of Western European nations than for comparable topics in African, Asian, or Indigenous contexts: a disparity that reflects the collections the headings were originally designed to serve, not the relative significance or complexity of those subjects.

AI trained on existing LCSH governed catalog records reproduces this vocabulary. A system that suggests subject headings from existing catalog patterns will suggest the terms that appear most frequently in training data, which means it will suggest inadequate terms for materials about underrepresented communities just as existing catalog records use inadequate terms for those materials. Furthermore, because AI weights high frequency training examples, the terms most commonly applied to materials about marginalized communities, including terms that reparative cataloging practitioners are actively working to replace, are precisely the terms AI will most confidently suggest. Such a system does not amplify bias in the sense of inventing new harms; it entrenches existing harm by applying it efficiently and at scale.

The professional responsibilities that follow from this understanding are clear. AI subject heading suggestions require human review for all materials, not as a formality, but as a substantive quality control step. For materials about historically underrepresented or marginalized communities, review should be conducted by catalogers with specific knowledge of reparative cataloging principles and current community driven vocabulary initiatives such as the Cataloging Lab and relevant SACO funnel projects. Additionally, the ARL Guiding Principles for AI explicitly call for librarians to understand and raise awareness of AI bias; in cataloging contexts, this means both applying that awareness in daily practice and contributing to institutional and professional conversations about how AI assisted cataloging workflows are designed and governed. There is no doubt that the efficiency gains from AI assisted subject tagging are only professionally defensible when the quality control layer is substantive, documented, and applied with particular care to the collections and communities that existing cataloging systems have historically served least well.`,
        },
        {
          heading: "Tools in the AI metadata space: an honest evaluation",
          body: `The tools available for AI assisted metadata work fall into two broad categories: integrated features within existing library systems that catalogers access through their established platforms, and general purpose AI tools applied to metadata tasks by catalogers who have developed their own workflows. Understanding what each category offers, and what it requires from the cataloger to use responsibly, which guides the practical tool decisions that digital librarians face in a landscape that is changing more rapidly than professional documentation can track.

**Integrated library system AI features** carry the most institutional significance because they operate within the systems the library already manages and are governed by existing vendor relationships and data agreements. Ex Libris has been integrating AI features into Alma and Primo across multiple release cycles, including AI assisted metadata enrichment, subject heading suggestions drawn from the WorldCat knowledge base, and authority control matching. For example, the Alma catalog module has included piloted features that suggest subject headings based on existing record content by matching against WorldCat holdings patterns. Such integrated features are worth investigating through the library's vendor account manager and the Ex Libris developer network for current availability and configuration options, as the release cadence is faster than formal documentation cycles. Similarly, OCLC has invested in AI applications for WorldShare record quality, including duplicate detection, subject heading suggestions, and automated quality scoring. Librarians whose institutions use WorldShare Management Services should review the OCLC AI feature documentation regularly, as capabilities have been expanding through the same period.

**AERIE (AI Enhanced Record Improvement)** is a tool designed specifically for academic library catalog record enhancement that has received discussion in professional library technology forums and LTI assessments. Its application to batch record improvement and subject heading suggestion addresses the same cataloging bottlenecks covered in this module. As with any specialized tool in this space, current availability, institutional pricing, and feature scope should be verified through direct vendor contact and current community assessments rather than relying on documentation that may be outdated, a caution that applies across the entire AI metadata tool landscape.

**General purpose AI tools** such as Claude and ChatGPT are a practical option for smaller scale normalization and description tasks that do not require specialized cataloging system integration. For example, a cataloger working on a batch of digital object records that need descriptive summaries can develop a reliable prompt workflow using Claude without any specialized tool, producing draft descriptions that are reviewed through the existing quality control process. Such an approach is most appropriate for rule based, content grounded tasks, not for those requiring authoritative MARC validation or ILS system integration. In order to evaluate any tool in this space, librarians should apply the framework from Module 03: understand the business model, review the privacy terms (patron search data entering external AI systems is a specific concern for catalog integrated tools), check for community assessments from LTI and LITA, and pilot with low stakes records before applying to production collections.`,
        },
        {
          heading: "Designing a quality controlled AI cataloging workflow",
          body: `A responsible AI assisted cataloging workflow is not the existing cataloging workflow with AI added at the beginning. It is a deliberately designed process that specifies what AI will do, what human review will verify, what quality standards apply, and how the workflow will be audited and adjusted over time. Such design takes more upfront thought than informal AI adoption, and it produces substantially more reliable and professionally defensible results.

The workflow design begins with task specification: identifying precisely which cataloging tasks will be AI assisted, and which will remain entirely in professional hands. Not every cataloging task benefits equally from AI assistance, and some (original cataloging of complex, specialized, or culturally sensitive materials; classification decisions for items in emerging subject areas; authority work requiring interpretation of identity and community naming) require professional judgment that AI cannot reliably provide. For example, a workflow that uses AI for batch normalization of date and name authority fields while keeping original subject heading assignment entirely in professional hands is more defensible than one that uses AI for all MARC field generation, because the former concentrates AI assistance where rule following is sufficient and preserves professional control where judgment is required.

The review architecture is the most critical design decision. Determining what percentage of AI output will be reviewed, at what depth, and by whom: these decisions determine whether the efficiency gain from AI assistance is real or illusory. A workflow that processes one thousand records with AI and reviews ten percent produces genuine efficiency only if the ninety percent not reviewed are reliably correct. Establishing that baseline reliability requires an initial period of higher review rates, specifically reviewing fifty to one hundred percent of output across a range of record types, to measure AI accuracy on the specific tasks the workflow handles. Such calibration is not optional; it is the professional foundation that makes reduced review rates defensible and the efficiency claim honest.

Quality auditing is the ongoing component that distinguishes sustainable AI workflows from initial experiments. After AI processed records go live in the catalog or digital collection, a sample should be reviewed at regular intervals to measure error rates, identify systematic problems, and adjust the workflow accordingly. For example, if a quarterly audit reveals that AI suggested subject headings for a specific collection type are consistently inaccurate at a higher rate than the overall workflow baseline, that collection type should move to a higher review category until the error source is understood and addressed. Such auditing is consistent with ACRL subcompetency 4.1; applying AI for task efficiency requires that the efficiency is real, which means the output must be accurate enough to serve the collection's users.

In order to communicate the workflow's design and quality standards to administrators and colleagues, it is useful to document the workflow in a brief written protocol that specifies the tasks included, the review percentages applied, the quality thresholds that trigger workflow adjustment, and the audit schedule. Such documentation supports the professional accountability principle that human professionals are responsible for AI assisted outputs, and provides the institutional record needed to evaluate the workflow's performance and defend its use if questions arise about record quality.`,
        },
      ],
      practitionerNote:
        "A compelling case for AI assisted cataloging often comes from date normalization: legacy records with inconsistent date formats accumulated across cataloging eras. A collection where birth and death dates in the 100 field appear in four different formats across approximately eight thousand records represents a known problem that gets deferred for years because the manual correction time is prohibitive. Processing those records through Claude with a precise normalization rule and a set of examples, then reviewing the output on a sample of two hundred records before committing to the full batch, and correcting the outliers where the rule has not applied cleanly, can reduce a project estimated at several weeks to two days of work. Such an experience does not reduce professional care in cataloging; if anything, seeing how precisely the rules need to be specified to produce clean output increases attention to what professional specification actually requires. In order to identify similar opportunities, auditing the catalog for the most common consistency problems and asking whether each one has a rule precise enough to be delegated to AI is the practical starting point. If the rule can be written clearly, the task is a candidate.",
      summary: [
        "AI is most reliable in metadata work when applying explicit rules to provided content; batch normalization, description drafting from supplied text, and subject heading suggestions from provided abstracts all carry substantially lower risk than AI generating records from sparse inputs alone.",
        "Batch record cleaning (normalizing date formats, name authority variants, and controlled vocabulary) is the highest value, lowest risk AI application for most cataloging workflows; the rules come from the cataloger, not from the model.",
        "AI suggested subject headings require professional verification against the actual LCSH authority file before application; AI inherits the vocabulary of its training data, including outdated, superseded, and biased terminology.",
        "Automated classification systems replicate and can amplify the representational biases of existing catalog records; materials about historically marginalized communities require heightened human review regardless of workflow efficiency pressures.",
        "Integrated library system AI features (Alma, WorldShare) and specialized tools like AERIE should be evaluated through current vendor documentation and LTI assessments; general purpose AI is appropriate for smaller scale, rule based normalization without ILS integration.",
        "A defensible AI cataloging workflow specifies task scope, establishes initial review rates calibrated to measured accuracy, and includes regular quality audits that can trigger workflow adjustment when error rates exceed acceptable thresholds.",
      ],
    },
  },

  {
    id: 9,
    slug: "digital collections-discovery",
    title: "Digital collections & discovery",
    level: "applied",
    audience: "digital",
    acrlCompetencies: ["application"],
    acrlSubCompetencies: ["4.1", "4.4", "3.2"],
    topics: [
      "AI in discovery layers: what's actually available now",
      "Enhancing finding aids with AI assisted description",
      "Accessibility improvements using AI transcription and description",
      "Institutional repositories and AI assisted metadata",
      "Electronic resource management and AI tools",
    ],
    objectives: [
      "Identify AI features in your current discovery layer and how to configure them",
      "Apply AI to improve description or accessibility in a digital collection",
      "Evaluate AI transcription tools for archival or audiovisual materials",
      "Draft a workflow for AI assisted finding aid enhancement",
      "Understand the limitations of AI in discovery contexts",
    ],
    estimatedMinutes: 20,
    status: "published",
    isGap: false,
    description:
      "AI is reshaping how patrons discover library collections, and how libraries describe them. This module covers the practical state of AI in discovery layers, digital collections, and institutional repositories.",
    relatedModules: [
      "metadata-and-cataloging",
      "ai-library-systems-integration",
      "automating-repetitive-tasks",
    ],
    content: {
      intro:
        "Digital collections and discovery work sits at an unusual intersection in the current AI landscape: it is simultaneously the library function where AI has the longest operational history and the function where the most significant changes are currently underway. Machine learning has been embedded in discovery platform relevance ranking for over a decade. What is new is the ability to use generative AI to improve the underlying descriptions, transcriptions, and metadata that make discovery possible in the first place, and to do so at the scale that backlogs and resource constraints have made manually impossible for most institutions. The most useful reframe for digital collections librarians approaching AI is this: AI does not change what good discovery depends on. Good description, accurate metadata, accessible formats, and intellectually coherent organization remain the professional foundation. What AI changes is how much of that foundation a digital librarian can build with the time and staff resources actually available.",
      sections: [
        {
          heading: "AI in discovery layers: what has actually changed and what you can configure",
          body: `Discovery platforms have incorporated machine learning for relevance ranking, query expansion, and faceted refinement for well over a decade. Primo, EBSCO Discovery Service, Summon, and WorldCat Discovery all use algorithmic relevance models that have been iteratively refined through usage data. When a patron's search returns results ranked by relevance rather than date or call number, that ranking reflects a machine learning model, even if the platform does not describe it that way. In order to understand the current AI state of your discovery layer, the most important distinction is between features that have been present for years and genuinely new generative AI capabilities, because the professional actions appropriate to each are quite different.

The newer generation of discovery AI includes semantic search, natural language query processing, and AI generated summaries of search results. Semantic search interprets the meaning of a query rather than matching its exact terms, which means a patron searching for "how stress affects memory" retrieves conceptually relevant results even when sources use different vocabulary such as "cortisol and hippocampal function" rather than the patron's own phrasing. Harvard University Library's Collections Explorer platform, launched in 2024, provides a concrete institutional example: it allows researchers to explore Harvard's collections through natural language queries, combining semantic search with generative AI to surface connections across disparate collection areas that keyword search would not reveal. Such a shift in patron experience, from search term construction to conversational inquiry, is not merely an interface change. It reflects a fundamental change in how the discovery layer interprets patron intent.

OCLC added AI assisted classification and subject heading suggestions to its WorldShare Record Manager and Connexion cataloging applications in December 2025, drawing on WorldCat's hundreds of millions of bibliographic records to suggest Dewey Decimal Classification numbers, Library of Congress Classification numbers, and Library of Congress Subject Headings at the point of cataloging. Such a feature illustrates the direction all major platform vendors are moving: AI embedded directly in the professional workflow rather than offered as a separate tool. Furthermore, Ex Libris launched Alma Specto, an AI powered platform for digital collections management, which incorporates AI metadata creation, bulk editing, and discovery enrichment into a single integrated workflow.

The professional limitation that matters most in this landscape is the distinction between vendor controlled AI features and locally configurable ones. Many discovery platform AI capabilities are determined by the vendor and applied uniformly across subscribing institutions; a digital librarian cannot adjust the semantic model or the relevance weights directly. What is configurable at the local level varies by platform and contract: relevance tuning profiles, query expansion settings, local boosting rules, and which AI features are exposed to patrons. In order to know what is actually available at your institution, the most direct approach is to review your platform's current release notes, contact your vendor representative with specific questions about AI features enabled in your subscription tier, and request a demonstration of any semantic search or AI summary capabilities that are available but not yet turned on. Such advocacy for specific features, rather than passive acceptance of the platform's defaults, is a genuine professional function that improves patron experience in ways the vendor cannot accomplish without institutional input.`,
        },
        {
          heading: "Semantic search and natural language discovery: the patron experience is shifting",
          body: `The practical difference between keyword search and semantic search is visible in patron behavior, even when patrons cannot articulate the difference. A patron who types a natural language question into a semantically capable discovery layer and receives relevant results is experiencing something fundamentally different from Boolean search, even if the interface looks similar. Such a patron is not required to know controlled vocabulary, translate research questions into search terms, or apply Boolean operators, and for patrons who have spent their lives seeking information through conversational search engines, the absence of that translation requirement is significant.

Yale Library has developed a prototype for a Digital Collections AI application that applies large language models directly to digitized texts, performing summarization, translation, named entity extraction, and question answering on items from Yale's digital collections. For example, a researcher working with digitized historical correspondence could ask the system a question about the correspondence's content and receive a synthesized answer drawn from the transcribed text, rather than needing to read every letter to locate a specific reference. Such a capability transforms the researcher's relationship to a large, underdescribed collection: instead of navigating finding aids and reading item by item, the researcher can interact with the collection's content directly. Yale is actively seeking instructor partnerships to test the application, which means that libraries investigating similar capabilities have a peer institution example to examine and a potential collaboration to pursue.

Knowledge graphs represent a related but distinct approach to discovery enhancement. Tools like Yewno connect concepts across resources using semantic relationships rather than keyword matching, allowing a patron to follow a concept through related ideas, disciplines, and sources in ways that traditional subject heading navigation does not support. Primo's "Topics" feature uses a similar underlying logic, surfacing conceptual relationships between a search result and connected ideas based on how concepts are linked across the literature. Such relational discovery is particularly useful for interdisciplinary research, where a concept in one discipline has meaningful connections to literature in adjacent fields that might not share controlled vocabulary.

The professional responsibility that semantic search creates is instruction related rather than technical. Patrons who use natural language discovery tools successfully may conclude that AI search is more comprehensive than it is, reasoning that if the tool did not surface a source, the source does not exist or is not relevant. In order to prevent such a misconception from affecting patron research quality, instruction should address the difference between semantic discovery and comprehensive bibliographic retrieval: AI can surface likely relevant results, but it cannot guarantee completeness in the way a systematic database search with explicit inclusion criteria can. Additionally, semantic search results require the same evaluation that keyword search results require; relevance ranking does not confer authority, and a result appearing at the top of an AI ranked list is not thereby more credible than one appearing lower. Such instruction points should be integrated into any session where patrons are introduced to a semantically capable discovery platform.`,
        },
        {
          heading: "Finding aids and AI assisted description: making archival collections accessible",
          body: `The description gap in archival collections is one of the most persistent practical challenges in digital library work. Collections that were digitized under grant funding, often with tight timelines and minimal staffing, frequently have finding aids that contain collection level scope notes and series descriptions but no item level description at all. Such collections are technically accessible but practically invisible: a patron who cannot find an item through description cannot know it exists, regardless of how thoroughly it has been digitized. AI description assistance addresses this gap at a scale that manual remediation, with existing staff and resource levels, cannot match.

The workflow for AI assisted finding aid enhancement proceeds from existing content rather than generation from scratch. For a collection with a collection level scope note, series descriptions, and digitized item images or transcriptions, AI can draft plain language summaries of each series, generate patron accessible overviews of complex intellectual arrangements, and produce item level descriptions from provided transcription content. For example, an archivist working with a digitized correspondence collection can provide AI with a letter's transcription and prompt it to write a three to five sentence catalog description identifying the sender, recipient, date, primary subject, and any significant details a researcher would find relevant. Such a description is a draft requiring archivist review for factual accuracy, appropriate terminology, and adherence to archival description standards, but it is a draft produced in seconds rather than minutes, which represents a substantial per item efficiency gain when applied across a collection of several hundred items.

The particular strength of AI in finding aid work is translating archival language into patron accessible prose. Finding aids written in traditional archival description conventions, with terminology like "accruals," "extant," "bulk dates," and "provenance," are opaque to most patrons who have not received archival research training. For example, providing AI with an existing scope and content note and asking it to rewrite the note for an undergraduate student who has never visited an archive before produces a genuinely more accessible document with the same information presented in a different register. Such plain language rewriting preserves the intellectual content of the description while substantially expanding the patron population who can interpret it.

Heightened professional care is required for two categories of archival material. First, collections containing records about living individuals, including recent institutional records, community archives, and personal papers with donor imposed restrictions, require careful review to ensure AI generated descriptions do not disclose information beyond what the access policy permits. AI does not inherently know which details in a document are sensitive; the archivist's professional judgment about appropriate description remains the only reliable filter. Second, collections documenting Indigenous communities and cultural materials require description that reflects the originating community's preferred terminology and the collection's access conditions, which may be community governed rather than institutionally determined. AI trained on mainstream archival description conventions will not automatically apply Indigenous centered description principles; such principles must be provided explicitly in the prompt and verified in the output. Additionally, any finding aid content generated with AI assistance should be disclosed in the collection's processing note, both as a matter of professional transparency and as documentation useful for future revision.`,
        },
        {
          heading: "Accessibility: AI transcription, image description, and removing barriers at scale",
          body: `The accessibility debt carried by most digital collections programs is substantial and largely invisible until a patron with a disability encounters it. Audio and video materials without transcripts are inaccessible to deaf and hard of hearing users. Images without alt text are inaccessible to blind and low vision users who rely on screen readers. Digitized text with poor OCR quality is inaccessible to users who depend on text to speech tools. Section 508 of the Rehabilitation Act requires accessible electronic content for federal agencies and many federally funded institutions, and most digital collections programs, despite best intentions, have not been able to generate the accessible formats that compliance requires because the manual labor involved exceeds available staff capacity.

AI transcription has reached a level of reliability that makes it a practical tool for production workflows rather than an experimental one. OpenAI's Whisper model, which is open source and free to run locally, produces transcripts from audio files with accuracy levels sufficient for most library applications after human review. For oral history collections (where interview recordings may run several hours each and manual transcription would require paid professional services or substantial volunteer labor), AI transcription converts an economically prohibitive task into a review and correction workflow. For example, a digital librarian managing a collection of fifty oral history interviews, each averaging ninety minutes, faces approximately seventy five hours of manual transcription to provide accessible transcripts. Running those recordings through Whisper and reviewing the resulting transcripts takes considerably less time, particularly for recordings with good audio quality and standard English speech patterns. Such a reduction in labor barrier is what allows accessibility compliance to become practically achievable rather than permanently deferred.

Accuracy varies predictably with audio quality, speaker accent, technical vocabulary, and background noise. Recordings with poor audio, multiple simultaneous speakers, strong regional accents, or specialized disciplinary terminology will produce transcripts requiring more substantial review and correction. Such variation is a reason to pilot transcription on a representative sample of recordings before committing to a production workflow; it allows the digital librarian to calibrate the review time required for a specific collection's characteristics before planning a full scale project. Furthermore, for collections documenting languages other than English, both Whisper and commercial tools like Otter.ai and Rev AI show variable performance that requires evaluation against the specific language before the workflow is adopted.

AI alt text generation for images in digital collections addresses a second major accessibility gap. For image collections such as photographs, maps, illustrations, and digitized artworks, AI can generate descriptive alt text that screen reader users receive in place of the visual content. The practical workflow involves providing the image to a vision capable AI model and requesting a description appropriate for the image type and patron use context. For example: "Write alt text for this photograph from a 1950s university yearbook. Describe the image content precisely in one to two sentences. Do not interpret or editorialize; describe what is visible." Such a prompt produces draft alt text that the digital librarian reviews for accuracy and appropriate detail level. The review step is essential: AI image description can misidentify individuals, misread text within images, or provide descriptions that are accurate but not optimally useful for the research context. Such errors are reliably catchable through human review, and catching them before publication is both professionally and institutionally important.`,
        },
        {
          heading: "Institutional repositories: addressing metadata debt with AI",
          body: `Institutional repositories accumulate metadata inconsistency the way physical collections accumulate dust: gradually, invisibly, and in ways that become expensive to address only once the accumulation is large enough to affect discoverability in measurable ways. Author name variants arise from inconsistent formatting across departments and submission periods. Subject terms reflect practices from multiple eras and multiple catalogers. Abstracts are missing from older deposits that predate the repository's current deposit workflow. Institutional affiliation fields contain every variation of the institution's name that has been used over its history. Such inconsistencies reduce discoverability both within the local IR interface and in aggregated indexes like BASE, CORE, and OpenDOAR, which rely on metadata quality for reliable syndication.

AI batch processing addresses IR metadata inconsistency at the scale that manual remediation cannot. The approach follows the same information in logic that makes AI batch processing reliable in cataloging contexts: AI given a clear normalization task and a representative set of records applies rules consistently across the full set, which the digital librarian reviews for quality before committing to the production data. For example, a digital librarian managing an IR with five thousand records carrying inconsistent author name formatting can export a CSV of affected name fields, provide AI with the target format and three to five examples of the transformation, and receive a corrected dataset for review. Such a task, done manually, might require days of careful review and editing. Done with AI assistance and post processing review, it can typically be completed in hours, with the important caveat that the review step must be taken seriously, not treated as a formality.

Subject term enrichment for poorly described IR deposits represents a second high value application. Records deposited without subject terms, or with only local, nonstandard terms, are difficult to discover through standard subject facets and fail to syndicate effectively to aggregated indexes that rely on controlled vocabulary. Providing AI with a deposit's title, abstract, and any available keywords and asking it to suggest appropriate subject terms from a specified vocabulary produces candidate terms that the digital librarian evaluates against the actual controlled vocabulary and the item's content. For example: "Suggest five to seven subject terms for the following dissertation abstract, using Library of Congress Subject Headings. Note any terms you are uncertain about." Such a prompt produces a working set of suggestions that substantially reduces the per record effort of subject enrichment for a large backlog.

Ex Libris has implemented AI metadata enrichment directly in Alma for ProQuest EBook Central records, automatically adding language, summary, and subject heading fields in alignment with Library of Congress standards for records in the Alma Community Zone. Such a vendor implemented example illustrates the direction the field is moving: AI metadata enrichment becoming a standard feature of IR and library management platforms rather than a locally implemented workflow. For digital librarians evaluating platform upgrades or new IR systems, AI metadata capabilities are now a relevant evaluation criterion, and a question worth asking any vendor whose platform manages institutional repository deposits.`,
        },
        {
          heading: "Building a sustainable AI enhanced digital collections workflow",
          body: `The most common mistake in AI adoption for digital collections work is selecting the tool before defining the problem. A digital librarian who reads about AI image description and immediately begins generating alt text for the most prominent collection in her repository may find that the workflow produces inconsistent results, requires more review time than anticipated, and is difficult to hand off to colleagues because the process was developed informally. In order to build a workflow that scales and sustains, the sequence should move from audit to pilot to documented process, with the documentation step treated as essential rather than optional.

The audit phase begins with a discerning assessment of where the most significant description, accessibility, and discoverability gaps exist in the current digital collections program. For most institutions, this means answering three questions: Which collections have the most serious description deficits? Which materials lack accessibility equivalents that are required or most needed? Where is metadata inconsistency most affecting patron discoverability? Such an audit does not require a comprehensive collections inventory; it requires enough knowledge of the collection landscape to identify the highest priority targets for AI assistance. The digital librarian who has managed a repository for several years typically already knows where the most significant problems are; the audit formalizes that knowledge into a prioritized list that can guide a phased implementation.

The pilot phase applies AI assistance to a small, bounded scope such as one collection, one record type, or one batch of fifty items, before committing to a full scale workflow. Such a pilot serves two purposes: it reveals the practical quality level of AI output for the specific collection characteristics and prompt design being used, and it generates realistic estimates of review time that can inform project planning. For example, a digital librarian piloting AI transcription for an oral history collection might run ten recordings through Whisper and time the review and correction process for each, then use that data to estimate the full collection's transcription timeline. Such empirical data is more reliable than vendor estimates or peer institution benchmarks, because it reflects the specific characteristics of the actual recordings (audio quality, speaker patterns, technical vocabulary) rather than generic performance claims.

The documentation step is where sustainable workflow development most often breaks down. A workflow that works for one person and has never been written down is not an institutional workflow; it is a personal practice that disappears when the person changes roles or institutions. In order to build a workflow that persists and can be handed off, the documentation should capture the prompt or prompt template used, the quality review criteria applied, the record keeping conventions for flagging AI assisted records, and the conditions under which the workflow requires escalation to additional professional review. Such documentation is the difference between AI adoption that builds institutional capacity and AI adoption that builds individual efficiency, and for digital collections programs managing long term collections, institutional capacity is the appropriate goal. Furthermore, sharing workflow documentation with peer institutions through professional networks such as the Digital Library Federation, the Society of American Archivists, and OCLC communities, contributes to the shared professional knowledge base that makes adoption easier for institutions earlier in the process.`,
        },
      ],
      practitionerNote:
        "The accessibility application is what demonstrates most clearly that AI belongs in digital collections workflows, not as a productivity enhancement but as a genuine service expansion. An oral history collection with over sixty recordings and no transcripts represents exactly the kind of accessibility debt that has accumulated for years because manual transcription is financially out of reach. Running the first ten interviews through Whisper and reviewing the output takes an afternoon. The transcripts are not perfect: there will be proper noun errors, some regional vocabulary the model does not recognize, and a few passages that need significant correction. But they are usable after review, and they are better than no transcript. What this illustrates is not merely efficiency, though the efficiency is real. It is that the barrier between 'this collection exists' and 'this collection is accessible' has dropped low enough to actually cross. That is a different category of value than saving time on a task that was already being done.",
      summary: [
        "Discovery platforms have incorporated machine learning for relevance ranking for over a decade; genuinely new capabilities include semantic search, natural language query processing, and AI generated summaries, most of which are vendor controlled rather than locally configurable.",
        "Semantic search and natural language discovery change the patron experience by interpreting query meaning rather than matching terms; instruction should address both the expanded access this provides and the completeness limitations it does not resolve.",
        "AI assisted finding aid description is most reliable when working from existing content (scope notes, transcriptions, partial records) rather than generating description without provided material; sensitive collections require heightened archivist review before any AI assisted description is published.",
        "AI transcription using tools like Whisper makes accessibility compliance achievable for oral history and AV collections where manual transcription is economically prohibitive; accuracy varies with audio quality and should always be reviewed before publication.",
        "Institutional repository metadata debt (inconsistent author names, missing subject terms, variable description quality accumulated across deposit years) is addressable through AI batch processing applied with explicit normalization rules, followed by quality review before production commitment.",
        "A sustainable AI enhanced digital collections workflow requires three phases in sequence: an audit identifying the highest priority gaps, a pilot on a bounded scope that generates realistic quality and time estimates, and documented processes that build institutional capacity rather than individual efficiency.",
      ],
    },
  },

  {
    id: 10,
    slug: "prompt-library-for-library-work",
    title: "Prompt library for library work",
    level: "applied",
    audience: "both",
    acrlCompetencies: ["application"],
    acrlSubCompetencies: ["4.3", "4.1"],
    topics: [
      "What a prompt library is and why it matters",
      "Building reusable prompts by task type",
      "Claude Projects for persistent library workflows",
      "Sharing prompts across departments and institutions",
      "Maintaining and improving your prompt library over time",
    ],
    objectives: [
      "Build a personal prompt library with at least ten reusable prompts for your library work",
      "Set up a Claude Project (or equivalent) with persistent context for a recurring workflow",
      "Share prompts effectively with colleagues so they can adapt them for their own use",
      "Explain why a prompt library reduces variability in AI output",
      "Develop a lightweight process for adding to and improving your prompt library",
    ],
    estimatedMinutes: 20,
    status: "published",
    isGap: false,
    description:
      "The difference between occasional AI users and power users is a prompt library. This module teaches you to build one, systematically capturing what works so you don't start from scratch every time.",
    relatedModules: [
      "talking-to-ai-effectively",
      "reference-and-instruction",
      "automating-repetitive-tasks",
    ],
    content: {
      intro:
        "The most consistent pattern among librarians who use AI effectively is not that they have better tools or more time to experiment; it is that they have stopped starting from scratch. The first time a prompt produces genuinely useful output, most people note that it worked and then move on. The next time they need a similar output, they reconstruct the prompt from memory, get a different result, and spend time adjusting. A prompt library is the professional practice of not letting that happen: systematically capturing what works, organizing it for retrieval, and building on it over time rather than repeatedly rediscovering the same effective approaches. The investment required is modest. The return, compounded across every task where you would otherwise start from scratch, is substantial.",
      sections: [
        {
          heading: "What a prompt library is and why variability is the problem it solves",
          body: `A prompt library is a curated collection of prompts and the contextual notes that make them reusable, organized for recurring professional tasks. It is not a log of every conversation you have had with an AI tool, and it is not a repository of prompts you have tried and might try again. It is a set of prompts that have been tested, have produced consistently useful output, and have been documented in a form that allows you to use them again without reconstructing them from memory.

The problem a prompt library solves is variability. AI output quality is not fixed; it varies significantly with how the prompt is constructed, what context the model has access to, and what constraints the prompt imposes. A librarian who drafts reference email responses by typing a quick request each time will get different quality outputs on different days, depending on how much context she happens to include, how clearly she specifies the tone and length, and whether she happens to articulate the task well in the moment. A librarian who runs the same email inquiry through a tested, context rich prompt template gets consistent output that she edits rather than rewrites. Such a difference (between inconsistent outputs that require substantial revision and consistent outputs that require light editing) is the practical consequence of working with and without a prompt library.

The analogy that resonates most with librarians is the reference interview framework. A reference librarian who has developed a reliable set of clarifying questions for common inquiry types does not reconstruct those questions from scratch with each patron; she has internalized an approach that reliably produces the information she needs to help. A prompt library externalizes the same logic: the "clarifying questions" are embedded in the prompt structure, and the librarian applies a tested approach rather than improvising each time. Furthermore, just as a reference interview framework improves with use, retaining questions that consistently produce useful responses and revising those that produce confusion, a prompt library improves as the librarian learns which prompt structures produce reliable results for her specific professional context.`,
        },
        {
          heading: "What belongs in a library prompt library: categories and examples",
          body: `The most useful starting point for building a prompt library is not to create prompts for every possible task, but to identify the five or six tasks you perform most frequently where AI assistance has already proven useful, and to build tested prompts for those tasks first. Such a focused beginning produces a small library that is actually used, rather than a comprehensive library that is consulted occasionally. The library grows naturally as the librarian encounters additional tasks where a saved prompt would have saved time.

For most academic librarians, the highest value categories fall into four areas. The first is patron communication: reference email responses by inquiry type, FAQ content for specific services, and subject guide descriptions for specific disciplines and patron populations. A tested prompt for reference email responses that specifies institution type, patron population, preferred tone, length constraint, and what to include or avoid will produce a useful draft for the vast majority of inquiries with only the patron's question swapped in. For example: "You are a library associate at a community college serving a high proportion of first generation students. A student has sent the following reference inquiry: [paste question]. Write a 150-word email response in a warm, encouraging tone that directly addresses the question, points the student to the most appropriate starting resource, and offers to follow up. Do not use library jargon." Such a prompt, once tested and confirmed to produce output that requires only light editing, is worth saving with that exact phrasing.

The second category is instruction: lesson plan drafts, learning objective sets, active learning activity ideas, and assessment questions. A tested lesson plan prompt that specifies session length, patron population, course context, the assignment being supported, and the specific learning outcome to prioritize will produce a starting structure for almost any single shot instruction session. The third category is administrative writing: annual report sections, grant narrative segments, policy draft frameworks, and meeting agendas, all tasks that share the characteristic of being time consuming, structurally familiar, and amenable to AI drafting with light human review. The fourth category is research support: search strategy development for specific disciplines, document summarization with specified output format, and synthesis across multiple sources for a stated purpose.

A practical rule for deciding what to add to the library: if you used an AI prompt for a task and thought "I should save that," save it within the same session. If you wait until later, the exact prompt wording is typically gone, and you have only a general memory of what worked. In order to make saving effortless, maintain the library in a format you can access immediately (a pinned document, a saved note, a dedicated tab) rather than in a system that requires multiple navigation steps before you can add an entry.`,
        },
        {
          heading: "Anatomy of a reusable prompt: variables, context, and constraints",
          body: `The structural difference between a single use prompt and a reusable prompt is the presence of variables: clearly marked placeholders for the elements that change from task to task, and the explicit specification of context and constraints that remain constant across uses. A single use prompt is optimized for a specific task in a specific moment; a reusable prompt is optimized for a class of tasks and documents the parameters that make it work.

The standard structure of a reusable library prompt has four components. First, a role or context specification that tells the model who it is and what professional setting applies: "You are a reference librarian at a midsize public university library serving undergraduate and graduate students." Such a specification does not need to change between uses; it is the constant context that orients every output. Second, a task description with bracketed variables for the elements that change: "A [patron type] has sent the following inquiry: [paste inquiry]. Draft a [length]-word response in a [tone] tone." Third, a constraint set specifying what the output should include or avoid: "Include a recommended starting database, a brief explanation of why it is appropriate for this inquiry, and an offer to follow up. Do not use library jargon or assume prior database experience." Fourth, an output format specification when the format matters: "Format the response as a complete email, beginning with a greeting and ending with your name and title."

The bracketed variables ([patron type], [inquiry], [length], [tone]) are where the prompt is adapted for each use. Everything else stays constant. For example, the reference email prompt described above might be used for an undergraduate research inquiry, a graduate thesis consultation inquiry, and a faculty course reserve inquiry in the same week, with only the patron type and the pasted inquiry changing between uses. Such consistency in the non variable components is what produces consistent output quality: the model receives the same professional context, the same constraint set, and the same format specification each time, and the variability in output reflects only the genuine variability in the task itself rather than variability in how well the prompt happened to be constructed on a given day.

A practical note on prompt length: more specific prompts produce more consistent output, but there is a point at which adding constraints produces diminishing returns. The prompts in a well functioning library are typically longer than the prompts a librarian would construct spontaneously (more context, more explicit constraints, more format guidance) because they incorporate everything learned from testing about what produces reliable output. In order to find that specification level for a given task, the most efficient approach is to start with a reasonable prompt, test it on three or four representative examples of the task, note where the output required the most significant editing, and revise the prompt to address those failure modes. Such iterative refinement (test, identify failures, revise) is what distinguishes a tested prompt from a drafted one.`,
        },
        {
          heading: "Claude Projects and persistent context: setting up your professional workspace",
          body: `A prompt library stores what to ask; persistent context stores who is asking and why. The two work together. A librarian who has built a reference email prompt library still benefits from a persistent context setup that means she never has to include her institution type, patron population, and professional role in every prompt, because the model already knows that information from the project context. Such a combination, namely a library of tested task specific prompts used within a persistent professional context, is the configuration that produces the highest quality outputs with the least per session setup.

Claude Projects is the current implementation of persistent context in Claude. A project is a defined workspace with its own conversation history, custom instructions that apply to every conversation within the project, and uploaded documents the model can reference throughout. For example, a reference and instruction librarian might set up a project with custom instructions that include: "I am a reference and instruction librarian at a community college with a large first generation and returning adult student population. My institution has limited database subscriptions: primarily JSTOR, Academic Search Complete, and ProQuest. My patron facing communication should always use plain language, avoid library jargon, and assume students may be anxious about library research." Such instructions, set once and applied to every conversation in the project, eliminate the need to reestablish professional context at the start of every session.

Uploaded documents within a project extend the persistent context to include institution specific reference materials. A librarian who uploads her library's current database list, its hours and services FAQ, its information literacy outcomes document, and two or three of her strongest existing lesson plans creates a knowledge base the model draws on in every conversation, without the librarian needing to paste that content into each prompt. For example, when drafting a subject guide for a nursing course, the model can reference the uploaded database list to confirm what databases are actually available at the institution rather than suggesting databases the library does not subscribe to. Such grounding in institutional reality is a significant improvement over models generating generic outputs based on training data alone.

ChatGPT's Custom Instructions and Custom GPTs serve a similar function, with different architectural characteristics. Custom Instructions in ChatGPT apply persistent context across all conversations, making them appropriate for general professional context. Custom GPTs create a distinct configured assistant with specific instructions, uploaded knowledge, and defined capabilities, making them more appropriate for a specific recurring workflow than for general professional context. For shared team applications, Custom GPTs can be shared within an organization's ChatGPT Team or Enterprise plan, which is a relevant consideration for libraries where prompt sharing and collaborative workflow development are priorities. The practical guidance for most library professionals is to use whichever persistent context mechanism is available in the tool they use most consistently; the architecture differs, but the professional value of not restating your professional context in every session is the same regardless of platform.`,
        },
        {
          heading: "Sharing prompts across your library: multiplying individual effort",
          body: `A prompt that works for one librarian will work for her colleagues, with adjustments for their specific context. The institutional value of a prompt library is not fully realized until the prompts are shared, because an individually maintained library represents one person's accumulated knowledge, while a shared library represents the team's accumulated knowledge, and the latter is substantially more valuable than any individual contribution to it.

The simplest sharing mechanism is a shared document such as a Google Doc or Notion page organized by task category, with prompts presented in a standardized format that includes the prompt text, a single sentence description of the output it produces, the task it is designed for, any notes on how to adjust it for different contexts, and the AI tool on which it was developed and tested. Such a format matters because prompts shared without context are rarely adopted. A colleague who sees a block of prompt text with no explanation of when to use it or what it produces has no basis for evaluating whether it is relevant to her work. A colleague who sees the same prompt with a note that reads "Use this for drafting reference email responses to undergraduate research inquiries; it produces a 150-word draft in an accessible tone that typically needs only minor edits" can immediately evaluate whether it applies to her workflow and how to adapt it for her institution's context.

The LibGuide format is particularly well suited to institutional prompt sharing because it is familiar infrastructure that library staff already know how to navigate, and because it allows prompts to be organized by task type with tabs or boxes in a way that supports browsing rather than requiring keyword search. A staff only LibGuide page for library AI prompts (visible to colleagues but not to patrons) provides a natural home for a shared prompt library that does not require setting up new technology. For example, a LibGuide organized with tabs for Patron Communication, Instruction, Administrative, and Research Support prompts, with each prompt presented in the standardized format described above, is immediately usable by colleagues who have never contributed to its development.

The social dimension of prompt sharing deserves direct attention. Prompts are professional knowledge: a well crafted reference email prompt represents accumulated expertise about what makes patron communication effective in a specific institutional context. In order to make sharing feel like contribution rather than extraction, the acknowledgment practices that accompany prompt sharing matter: noting who developed a prompt, inviting colleagues to submit prompts they have developed, and treating the shared library as a team resource rather than an anonymous collection. Additionally, prompts should be shared with explicit permission to adapt; the goal is not that every librarian uses the exact same text, but that tested prompts serve as starting points that colleagues modify for their own context rather than building from scratch. Such a norm, to adapt rather than copy wholesale, produces a library that improves across the team rather than converging on a single approved text.`,
        },
        {
          heading: "Maintaining a living prompt library: dating, testing, and pruning",
          body: `A prompt library that is not maintained degrades. AI models update on vendor schedules that are not always announced clearly, and a prompt that produced reliable output on one model version may produce different output after a model update; sometimes better, sometimes worse, sometimes just different in ways that require the library to be updated. Tasks evolve as the librarian's workflow changes, institutional priorities shift, and the tools available to patrons change. A prompt written for a database the library no longer subscribes to, or for an instruction approach the librarian has moved away from, is not merely unused; it is actively misleading if a colleague consults the shared library and acts on it.

The minimum maintenance practice is dating every prompt when it is added to the library. A date entry does not require ongoing effort; it simply records when the prompt was last confirmed to work as described. Such a date allows anyone consulting the library to make an informed judgment about whether a prompt is likely to still be current; a prompt tested eight months ago in a field that has seen significant AI tool changes requires more skepticism than one tested last month. A "last tested" field, updated each time a prompt is used and confirmed to produce the expected output, is the single most useful maintenance addition beyond the initial date.

Annual review is the appropriate cadence for pruning. Once per year, or when a significant AI model update occurs, the library should be reviewed for prompts that are no longer relevant, prompts that reference tools or resources that have changed, and prompts that have been superseded by more effective versions developed since the original entry. Such a review is not a project; it is a few hours of evaluation, deletion, and updating that prevents the library from becoming cluttered with obsolete entries that reduce its usability. For example, a prompt library that has been accumulating entries for two years without review may contain three different versions of the reference email prompt, each representing a different stage of the librarian's thinking, with no indication of which is current. A pruned library contains one, the best current version, clearly dated.

The final maintenance practice is version noting for significant revisions. When a prompt is substantially changed (not minor wording adjustments but a structural revision that changes what the prompt produces), it is useful to note what changed and why. For example: "Revised October 2025: added constraint on response length after observing that earlier version produced outputs patron recipients found too long." Such a note is not required for every small adjustment, but it is useful for changes that reflect a meaningful learning about what the prompt needs to include. Furthermore, for shared libraries, version notes allow colleagues to understand why the prompt they had been using has changed, which prevents the confusion of having a prompt produce different output than expected without understanding why the standard version was updated. A prompt library maintained with dating, testing, and periodic pruning remains a genuinely useful professional resource rather than an archaeological record of past experiments.`,
        },
      ],
      practitionerNote:
        "A common resistance to building a formal prompt library is the perception of overhead: one more thing to maintain. The moment that typically changes the calculation is a concrete cost — spending twenty minutes trying to reconstruct a prompt that worked well three weeks earlier, unable to reproduce the output quality because the exact phrasing is gone. The time spent trying to reconstruct it exceeds the time it would have taken to save it properly the first time. That is a specific, measurable loss, not a hypothetical future efficiency. Librarians who begin saving prompts consistently after such a moment often find that six months later the library has forty or more entries covering most recurring tasks. The ones used weekly save time that is immediately noticeable. The ones used monthly save time that adds up across a semester. The ones saved but not yet used cost nothing except thirty seconds to capture. The ratio is favorable.",
      summary: [
        "A prompt library solves the variability problem: the same well constructed prompt produces consistent output that requires light editing, while reconstructed prompts produce variable output that requires substantial revision.",
        "The highest value starting categories for a library prompt library are patron communication, instruction, administrative writing, and research support; begin with the five or six tasks you perform most frequently where AI has already proven useful.",
        "A reusable prompt has four structural components: a constant role or context specification, a task description with bracketed variables for elements that change, a constraint set specifying what to include or avoid, and an output format specification.",
        "Claude Projects and equivalent persistent context features (ChatGPT Custom Instructions and Custom GPTs) eliminate the need to reestablish professional context in every session; prompts used within a persistent project context produce better grounded outputs with less per session setup.",
        "Prompts shared without context are rarely adopted; share prompts with a single sentence description of what they produce, the task they are designed for, and explicit permission to adapt for different institutional contexts.",
        "A prompt library that is not maintained degrades; the minimum maintenance practice is dating every prompt when added, reviewing and pruning annually, and noting significant revisions so colleagues understand why a standard prompt has changed.",
      ],
    },
  },

  {
    id: 11,
    slug: "making-the-case-to-administration",
    title: "Making the case to administration",
    level: "applied",
    audience: "both",
    acrlCompetencies: ["ethics", "application"],
    acrlSubCompetencies: ["1.4", "1.5", "4.2"],
    topics: [
      "Framing AI adoption for skeptical leadership",
      "Policy templates and responsible piloting",
      "Measuring and reporting AI impact",
      "Budget framing for AI tools and training",
      "The U.S. confidence gap: why U.S. libraries are behind their global peers",
    ],
    objectives: [
      "Present a case for AI adoption using data and framing appropriate for your institutional context",
      "Draft or contribute to an institutional AI acceptable use policy",
      "Design a small AI pilot with measurable outcomes",
      "Identify and frame the business case for an AI tool in terms administration will respond to",
      "Use the U.S. vs. global AI adoption data to frame urgency without alarmism",
    ],
    estimatedMinutes: 20,
    status: "published",
    isGap: false,
    description:
      "You've tried AI, you've seen the value, and now you need to bring your institution along. This module covers the practical advocacy work: how to frame the case, what data to use, and how to run a pilot that builds institutional confidence.",
    relatedModules: [
      "ethics-copyright-policy",
      "ai-for-research-support",
      "your-ai-strategy-next-steps",
    ],
    content: {
      intro:
        "The biggest barrier to AI adoption in most academic libraries is not the tools, not the professional uncertainty, and not the time required to learn. It is the conversation with administration. A librarian who has spent months developing a genuine, calibrated AI practice (who understands where the tools add value and where professional judgment is irreplaceable) often finds that bringing her institution along requires a different skill set entirely: the ability to translate what she has learned into language that resonates with institutional decision makers who may be skeptical, risk averse, resource constrained, or simply uninformed. This module is about that translation. The goal is not to sell administration on AI, but to be the informed, credible voice that helps leadership make good decisions, and to understand the data, frameworks, and pilot design approaches that make that conversation productive.",
      sections: [
        {
          heading: "Understanding how administration thinks about AI: risk, resources, and positioning",
          body: `Administrative skepticism about AI adoption is rarely ideological. Most library administrators who have not moved on AI are managing a familiar set of institutional pressures: limited budgets that must be justified to provosts and boards, risk exposure from data privacy incidents or policy violations that have consequences for the institution, staff capacity that is already stretched, and the reasonable concern that an early commitment to the wrong tool or approach will require costly correction. In order to make an effective case for AI adoption, the librarian needs to understand which of these pressures is most operative for her specific administration, because the framing that resolves a risk concern is structurally different from the framing that resolves a budget concern, and neither is the same as the framing that addresses the administrator who believes the institution is not yet at a stage where AI is relevant.

The most common framing mistake is leading with capability: describing what AI can do before addressing why the administration should care in terms it already cares about. An administrator who opens a conversation thinking about budget constraints does not become more receptive by hearing about AI's ability to draft subject guide descriptions faster. She becomes more receptive when she hears that AI reduces the staff time required for recurring writing tasks, and that the time savings are estimable in terms she already tracks. Such a reframe (from capability to institutional impact in the administrator's own terms) is the foundational move in effective administrative advocacy.

It is also worth understanding what administrators are hearing about AI from other institutional channels. IT departments, legal offices, provosts' offices, and accrediting bodies are all generating guidance about AI at an accelerating rate in 2025, and much of that guidance frames AI primarily as a compliance and risk management concern. The librarian who arrives at an administrative conversation aware of what the institution's IT acceptable use policy says, what the provost's office has communicated about AI in academic work, and what the institution's legal counsel has flagged as risk areas is in a substantially stronger position than one who arrives with library specific arguments alone. Such situational awareness signals that the librarian is approaching the conversation as an institutional partner rather than an advocate for a particular tool or practice, and it positions the library as a resource for the institution's broader AI decision making rather than a department seeking approval for an experiment.`,
        },
        {
          heading: "The data that makes the case: Pulse of the Library, ACRL, and the U.S. confidence gap",
          body: `Administrative conversations are more productive when they are grounded in external data rather than individual experience. A librarian who says "I have found AI useful in my reference work" is making a personal claim. A librarian who presents data showing where academic libraries are in AI adoption globally, where the U.S. sits relative to international peers, and what professional associations have determined about library AI competencies is participating in a sector level conversation, which is the appropriate register for an institutional decision.

The Clarivate Pulse of the Library survey is the most authoritative current benchmark for library AI adoption. The 2025 findings are particularly useful for administrative framing: 67% of libraries globally are exploring or implementing AI, up from 63% in 2024, and the proportion of libraries at active implementation stages has tripled over the same period. Such a rate of change is meaningful in administrative terms; it indicates that institutions which are not yet evaluating AI are not maintaining a stable position relative to their peers, but are falling behind a moving field. Furthermore, the Pulse data identifies budget constraints as the primary barrier to AI adoption, cited by 62% of respondents, which reframes the budget conversation from "should we spend money on AI" to "every library facing this decision is navigating the same resource pressure, and here is how the ones moving forward are addressing it."

The U.S. confidence gap deserves specific attention in administrative conversations at American institutions. The 2025 Pulse data shows that only 7% of U.S. librarians report optimism about AI, compared to 27-31% among their counterparts in Asia and other global regions. U.S. libraries are also significantly behind in implementation stages (14-16% at initial implementation or beyond, versus 37-40% in Asia and Europe). In order to use this data effectively without creating unproductive alarm, the framing should be specific: institutions that build library AI capacity now will be better positioned to support the AI literate graduates that employers and graduate programs are already expecting. Those that defer the decision are not avoiding a risk; they are accepting a different kind of risk, the risk of falling behind in a capability that is becoming a professional baseline.

The ACRL AI Competencies for Academic Library Workers, published in October 2025, provides the professional authority anchor for any administrative conversation. The framework, which defines what library workers need to know about AI across four competency areas (ethics, knowledge, evaluation, and application), is the field's answer to the question "what does responsible AI engagement look like for academic librarians?" Such a framework signals to administration that the library is not experimenting independently but following a professionally sanctioned development pathway. For example, a librarian who can say "the ACRL framework identifies [specific competency] as a foundational expectation for academic library professionals, and this pilot is designed to build that competency" is grounding an institutional request in the field's own standards, which is a significantly different conversation than requesting approval for a personal interest in new technology.`,
        },
        {
          heading: "Framing for different types of administrative skepticism",
          body: `The same proposal requires different framing for different audiences, and the librarian who can identify which concern is most operative for her administration and adjust accordingly will be substantially more effective than one who presents a single argument to every listener. Such audience awareness is not a form of manipulation; it is the professional practice of meeting people where they are, which is the same skill librarians apply in reference consultations and instruction sessions.

For risk averse administration, the most effective framing leads with risk mitigation rather than capability. The argument structure is: AI adoption without policy creates more institutional risk than adoption with policy, and a structured pilot with clear guidelines is less risky than the current situation where individual staff may already be using AI tools without institutional oversight or data protection guardrails. For example: "Our staff are likely already using AI tools informally. A pilot with defined parameters, approved tools, and data protection guidelines gives us visibility into that use and a framework for managing it responsibly, which is a better position than not knowing what's happening." Such a framing does not require the administrator to be enthusiastic about AI; it only requires her to recognize that structured adoption is more manageable than unmanaged individual adoption. The ARL Guiding Principles and ACRL AI Competencies framework should be presented as the professional authority backing the proposed approach, not as documents the administrator needs to read in detail.

For cost focused administration, the most effective framing quantifies time savings in terms the institution already tracks. Even conservative estimates are useful: if AI assistance saves each librarian thirty minutes per day on drafting, communication, and administrative writing tasks, that is approximately 125 hours per year per full time librarian. At a median librarian salary of $65,000, and accounting for benefits at a standard institutional multiplier, thirty minutes per day represents a meaningful recoverable capacity: time that can be redirected to instruction, reference, or collection work that serves institutional priorities directly. Such a calculation does not require precise data; it requires a defensible estimate that makes the time value of AI assistance visible in institutional cost terms. Furthermore, the cost of AI tool subscriptions, typically $20-25 per user per month for professional tiers, is modest relative to even a conservative estimate of recovered staff time, and the comparison should be made explicit rather than left for the administrator to calculate independently.

For the administration that believes the institution is not yet at a stage where AI is relevant, typically expressed as "our faculty aren't asking about this" or "our students seem to be managing," the most effective reframe is student outcomes rather than operational efficiency. The argument is not that students are currently struggling, but that the AI literacy competencies they will need after graduation are being developed now, at institutions that are preparing them, and that the library has a professional role in that preparation. Such a reframe shifts the conversation from "does the library need this" to "are we preparing our students for the environment they are entering", which is a question with clearer institutional stakes for an administration concerned with graduate employment outcomes and institutional reputation.`,
        },
        {
          heading: "Designing a pilot that builds institutional confidence",
          body: `The most common pilot design error is scope ambiguity: a pilot that is defined well enough to start but not well enough to evaluate. An administration that approves a "six month AI pilot" without a defined scope, a specified outcome measure, and a clear review point has approved a vague experiment that is difficult to report on and easy to question. In order to design a pilot that builds institutional confidence rather than extending ambiguity, four design characteristics are essential: bounded scope, measurable outcome, low stakes, and a defined review point.

Bounded scope means one tool, one use case, one team or individual, and a defined time period. For example: "A thirty day pilot in which the reference team uses Claude for drafting reference email responses, with all output reviewed before sending and patron data limited to anonymized inquiry descriptions." Such a definition is specific enough that the pilot can actually be evaluated: everyone knows what the tool is, what it is being used for, what the data protection constraint is, and when the evaluation will occur. An unbounded pilot such as "let's try AI for various things over the next six months" cannot be reported on meaningfully because there is no baseline and no defined outcome to measure.

Measurable outcome means identifying, before the pilot begins, what evidence will constitute success. For reference email drafting, the relevant measures might include time spent per email response before and after AI assistance, assessed by the librarians themselves; email response quality, assessed through patron follow up rates or explicit patron feedback; and any incidents requiring the pilot to be modified or paused, documented as they occur. Such prespecified measures mean the end of pilot report can present data rather than impressions, which is the difference between an evaluation that administration can act on and one that requires further clarification before a decision can be made.

Low stakes means starting with internal administrative work rather than patron facing services. The appropriate starting point is the work that would cause the least institutional exposure if a problem occurred: drafting internal communications, improving subject guide content that is reviewed before publication, or generating lesson plan structures that instructors evaluate before use. Such a sequence (internal first, patron facing after evidence of reliability) is also the most credible sequence for administrative purposes, because it demonstrates that the library is managing AI adoption incrementally and responsibly rather than deploying tools directly to patron services before their performance is understood. Furthermore, a pilot in the internal administrative domain produces outcome data that is easier to measure and report than patron facing outcomes, where attribution of changes to AI assistance is more complex.

The defined review point, a specific date or milestone at which the pilot outcomes are evaluated and a recommendation is made, is what converts a pilot from an indefinite experiment into a decision generating process. For example: "At the end of the thirty day period, we will present the reference team's documented time measures, any quality or incident observations, and a recommendation for whether to expand, modify, or conclude the use of AI for email drafting." Such a structure gives administration a timeline, a clear deliverable, and an explicit decision point: all of which reduce the openness that makes experimental programs difficult to oversee.`,
        },
        {
          heading: "Budget framing: presenting the cost of AI tools and training",
          body: `Budget requests for AI tools and training are most effective when they are presented as investment proposals with estimable returns rather than as requests for resources to cover an experiment. The distinction matters in administrative terms: an experiment consumes resources to find out something unknown; an investment commits resources in anticipation of a specified return. A librarian who presents an AI tool subscription request as an experiment is implicitly accepting that the outcome is uncertain and the administration's skepticism is reasonable. A librarian who presents it as an investment (with a stated expected return, a measurement approach, and a comparable cost reference) is engaging the administration as a partner in a resource allocation decision that has a defensible rationale.

Professional AI tool subscriptions for individual librarians typically cost between $20 and $30 per user per month for the tiers that provide meaningful professional functionality such as Claude Pro, ChatGPT Plus, and their equivalents. For a library team of five, a full year subscription commitment is approximately $1,200-$1,800 per year. Such a figure should be presented alongside a time savings estimate: if each team member saves thirty minutes per day on drafting and administrative tasks, the annual recovered capacity across five librarians is approximately 625 hours. At a midrange librarian salary of $60,000 plus benefits, that recovered capacity has an institutional value that substantially exceeds the subscription cost. Such a comparison does not require the administration to accept the time savings estimate as precise; it requires only that the estimate is reasonable and that the comparison makes the scale relationship between cost and potential return visible.

Training investment requires a separate and adjacent argument. The Clarivate Pulse data is directly relevant here: among libraries where AI literacy is part of formal training or onboarding, 28% are already at moderate or active implementation, compared to just 8% where there is little to no institutional focus on AI training. Such a gap in implementation outcomes between institutions that invest in training and those that do not is an evidence based argument for training as a prerequisite to effective adoption rather than an optional professional development add on. For example, requesting funding for three librarians to attend a professional development workshop on AI applications in library work can be framed as: "The institutions that are successfully adopting AI are the ones that have invested in building the professional capacity to do it well. This training is the foundational step that makes the rest of the pilot program viable." Additionally, the ACRL AI Competencies framework provides specific competency targets against which training can be designed and evaluated, which is a level of specificity that supports a professional development budget request more effectively than a general statement about the value of staying current.`,
        },
        {
          heading: "Drafting an institutional AI policy: why the library should lead",
          body: `Most academic institutions do not yet have an AI acceptable use policy that addresses library specific functions, data, and professional obligations. IT departments and legal offices are generating general institutional AI guidance (covering academic integrity, data security, and vendor contracts), but the library's specific obligations around patron privacy, professional disclosure, and collection related AI use are typically not addressed in general institutional guidance. In order to ensure that the policy framework governing library AI use reflects library professional standards rather than only institutional risk management priorities, the library needs to be a proactive participant in policy development rather than a passive recipient of guidance written by offices that do not share the library's professional context.

The ARL Guiding Principles for Artificial Intelligence, published in 2024, and the ACRL AI Competencies framework, published in October 2025, together provide the professional authority foundation for any library AI policy. The ARL Principles address governance, algorithmic equity, and the librarian's role as a responsible mediator of AI systems: foundational orientations that should inform any institutional policy. The ACRL Competencies define what professional AI engagement looks like across four areas, providing a vocabulary for policy provisions that reflect professional practice rather than only risk avoidance. A library AI policy that references both documents is anchored in nationally recognized professional standards rather than institutional convention, which is a stronger position in institutional policy conversations and provides a defensible basis for the policy's specific provisions.

A minimum viable library AI policy covers four provisions. First, which tools are approved for staff use, with a brief rationale for each approved tool and the data security basis for its inclusion. Second, what patron data can and cannot be entered into AI tools, specifically that patron records, personally identifiable inquiry information, and any data protected under FERPA or library confidentiality law cannot be entered into commercial AI tools without explicit institutional authorization for that data category. Third, disclosure requirements when AI is used in patron facing work: that AI assisted communications, guides, or finding aids are reviewed by a professional before publication, and that significant AI assistance in patron facing content is noted in appropriate institutional documentation. Fourth, who is responsible for reviewing AI output before it is published or used in patron facing contexts, which is a professional accountability provision rather than a technical one.

If the library drafts the policy rather than waiting for IT or legal to draft it, the library owns the framework. Such ownership has practical consequences: a policy written by library professionals will include provisions that reflect the FERPA obligations, the patron privacy commitments, and the professional disclosure norms that library practice requires. A policy written by IT or legal without library input may be technically sound but professionally insufficient: addressing data security without addressing the professional obligation to disclose AI use, for example, or treating library patron data as equivalent to general institutional data without recognizing the specific confidentiality protections that library records carry. Furthermore, a library that proactively brings a draft policy to administration signals institutional maturity: it is demonstrating that the library is not asking for permission to experiment without a plan, but proposing a responsible framework that the institution can adopt with confidence.`,
        },
      ],
      practitionerNote:
        "Administrative conversations that prove most impactful are often not with direct supervisors but with senior academic leadership: deans, provosts, and academic affairs offices that have been waiting for someone to bring them a governance framework rather than a request. In such conversations, a straightforward package tends to work well: the Pulse of the Library data showing where academic libraries stand globally, the 7% U.S. optimism figure alongside peer country comparisons, a single page description of the pilot to run, and a draft policy outline. What works in such conversations is not framing the request as 'we want to adopt AI' but as 'we want to build the institutional infrastructure to do this responsibly, and here is what that looks like.' That framing resolves the concern the administrator is already carrying rather than introducing a new priority, and it consistently moves the conversation forward.",
      summary: [
        "Administrative skepticism about AI adoption is typically about risk, resources, and institutional positioning, not ideology. Effective advocacy identifies which concern is most operative and frames accordingly.",
        "The Clarivate Pulse of the Library 2025 data is the most authoritative external benchmark: 67% of libraries globally are exploring or implementing AI, and the U.S. confidence gap (7% optimism versus 27-31% in peer regions) reframes the conversation from experimentation to institutional positioning.",
        "The ACRL AI Competencies for Academic Library Workers (October 2025) and the ARL Guiding Principles (2024) provide the professional authority anchors for any administrative proposal, grounding a local request in nationally recognized professional standards.",
        "A well designed pilot has four required characteristics: bounded scope (one tool, one use case, defined period), a prespecified measurable outcome, low institutional stakes to start, and a defined review point that generates a recommendation rather than extending ambiguity.",
        "AI tool subscriptions are most effectively presented as investment proposals with estimable returns: $1,200-$1,800 per year for a five person team, compared to hundreds of hours of recoverable staff capacity: a cost return comparison that makes the scale relationship visible without requiring precision.",
        "The library should draft the institutional AI policy rather than waiting for IT or legal to do so without library input; a policy written by library professionals will include patron privacy, professional disclosure, and FERPA provisions that general institutional guidance is unlikely to address adequately.",
      ],
    },
  },

  // ─── LEVEL 3: ADVANCED (coming soon at launch) ────────────────────────────

  {
    id: 12,
    slug: "automating-repetitive-tasks",
    title: "Automating repetitive tasks",
    level: "advanced",
    audience: "both",
    acrlCompetencies: ["application"],
    acrlSubCompetencies: ["4.1", "4.4"],
    topics: [
      "What's worth automating: the decision framework",
      "Zapier and Make with AI integrations",
      "Automated email drafts and triage",
      "Batch document processing",
      "Real before/after time examples from library workflows",
    ],
    objectives: [
      "Identify three to five tasks in your current workflow that are worth automating",
      "Build a basic automation connecting two library tools using Zapier or Make",
      "Apply AI to a batch processing task that previously required manual effort",
      "Calculate the time ROI of an automation you've built",
      "Understand when automation is appropriate and when human judgment is required",
    ],
    estimatedMinutes: 60,
    status: "coming-soon",
    isGap: true,
    description:
      "The first library automation course designed for nonprogrammers. You'll learn to identify what's worth automating, build your first real automations using visual tools, and see concrete time savings in your actual workflow.",
    relatedModules: [
      "agentic-ai-what-it-means",
      "vibe coding-for-librarians",
      "ai-library-systems-integration",
    ],
    content: {
      intro:
        "The most time consuming library tasks tend to be recurring ones: weekly usage stats pulled and pasted into a spreadsheet, semester subject guide footers manually updated with new library hours, patron questions copied from a chat system into a tracking document week after week. None of these tasks require a librarian's judgment. They require a librarian's time. Automation returns that time to higher value work.",
      sections: [
        {
          heading: "How to decide what's worth automating",
          body: `Not every repetitive task is worth automating. The decision has four parts:

**Frequency:** Does this happen daily or weekly? Monthly tasks rarely justify the setup time. Daily tasks almost always do.

**Consistency:** Does the task follow the same steps every time? Automation handles consistent processes well. Tasks that require judgment each time are better handled by a human, possibly with AI assistance, but not fully automated.

**Volume:** Are you doing this once or dozens of times? A batch of 200 records is worth automating. A batch of 5 probably isn't.

**Error cost:** What happens if the automation makes a mistake? Automating an internal tracking spreadsheet has low error cost. Automating patron facing communications has higher error cost and needs more careful setup and review.

A quick framework: if you can describe the task in a numbered list of steps with no judgment calls between steps, it's a candidate for automation. If the list has "then decide based on context" anywhere in it, that step still needs a human.`,
        },
        {
          heading: "Zapier for library workflows: starting simple",
          body: `Zapier is the most accessible automation tool for nontechnical users. It connects apps using a simple "when this happens, do that" structure called a Zap.

**How it works:** You pick a trigger (an event in one app) and an action (something that happens in another app as a result). Zapier handles the connection between them.

**Library workflows that work well as Zapier automations:**

*Form → Spreadsheet → Notification:*
When a patron submits a research consultation request form (Google Forms, Typeform, LibCal), automatically log it to a tracking spreadsheet and send yourself or your team a notification in email or Slack. This replaces manual copy pasting and ensures nothing gets missed.

*Email → Task:*
When an email arrives in a specific library inbox with certain keywords, automatically create a task in your project management tool (Asana, Trello, Notion). Useful for tracking faculty requests, ILL follow ups, or vendor correspondence.

*New resource → Announcement:*
When a new item is added to a specific database or list, automatically draft and queue a social media post or newsletter item. Requires a data source that has a trigger event.

**Getting started:** Create a free Zapier account. Choose one task you do manually at least once a week. Build a Zap for it. The interface walks you through trigger and action selection. Start with apps you already use (Google Workspace, Microsoft 365, LibCal, email) because they're likely already in Zapier's library.`,
        },
        {
          heading: "Make (formerly Integromat) for more complex workflows",
          body: `Make handles more complex automation scenarios than Zapier: multiple steps, conditional logic, data transformation, and loops. The visual interface shows your workflow as a flowchart, which makes it easier to understand what's happening at each step.

**When Make is better than Zapier:**
- Your workflow has more than two steps
- You need conditional logic ("if the patron type is faculty, do X; if student, do Y")
- You're processing batches of data rather than individual events
- You need to transform data between formats (e.g., extract specific fields from a spreadsheet before sending them somewhere else)

**A library example in Make:**
Automated new database trial notification workflow:
1. Trigger: New row added to a Google Sheet (your database trial tracker)
2. Filter: Only continue if the "Status" column says "Active trial"
3. Action: Use OpenAI to draft a short announcement in your library's voice, based on the database name and description columns
4. Action: Add the drafted announcement to a Google Doc queue for your review
5. After your approval (manual step): Send to newsletter list

This isn't fully automated; you review before sending, but it reduces a 30-minute task to a 5-minute review.

Make's free tier allows 1,000 operations per month, which covers most light library use cases.`,
        },
        {
          heading: "Batch processing with AI: real library use cases",
          body: `Some of the highest value library automation involves processing batches of text or data with AI rather than connecting apps. This doesn't require Zapier or Make. It requires a systematic prompting approach.

**Batch email responses:**
If you receive the same types of patron questions repeatedly, build a spreadsheet with question types and your preferred response templates. Use AI to customize each template for the specific patron question. For ten questions, this takes two minutes instead of twenty.

**Batch metadata cleaning:**
Export a CSV of catalog records with inconsistent or missing data. Paste batches of records into Claude or ChatGPT with instructions like: "For each of these records, suggest a corrected and normalized publisher name, and flag any that look like duplicates." Review the output and apply corrections.

**Batch document summarization:**
If you receive monthly vendor reports, assessment surveys, or faculty feedback documents, paste them into AI and ask for a two paragraph executive summary and a bullet point list of action items. This works especially well for documents that follow a consistent structure.

**The time math:**
Doing a monthly chat reference statistics summary manually typically takes 45 minutes. With an AI assisted workflow (copy stats into Claude, ask for the summary paragraph and comparison to last month): 8 minutes. Over a year, that's roughly 7 hours returned.`,
        },
        {
          heading: "When not to automate, and what automation can't do",
          body: `Automation is powerful when tasks are consistent and low stakes. It creates real problems when applied to the wrong things.

**Do not automate:**
- Communications that require empathy or individual judgment (patron in distress, sensitive reference question)
- Decisions with meaningful consequences (collection weeding decisions, access policy changes)
- Anything patron facing without a human review step
- Tasks where the "consistent" assumption is wrong; if there are more exceptions than you realize, automation will handle them badly

**What automation can't replace:**
Professional judgment isn't just doing a task; it's knowing when the standard approach doesn't apply. Automation handles the standard case. The librarian handles everything else.

The ARL "No Human, No AI" principle applies here directly: automation can handle execution, but consequential decisions need a human responsible for them. Design your automations so that the human is in the loop at decision points, not just at the start and end.`,
        },
      ],
      practitionerNote:
        "The automation that changes workflows most reliably is rarely the most sophisticated: a Zapier Zap that automatically logs every new LibCal appointment to a shared tracking spreadsheet and sends a Slack message to the team. Five minutes to set up. The kind of setup that prevents a missed appointment when someone is out sick.",
    },
  },

  {
    id: 13,
    slug: "agentic-ai-what-it-means",
    title: "Agentic AI: what it means",
    level: "advanced",
    audience: "both",
    acrlCompetencies: ["knowledge", "application"],
    acrlSubCompetencies: ["2.1", "4.4"],
    topics: [
      "What AI agents are and how they differ from chatbots",
      "Multistep autonomous task execution",
      "Claude Projects as a light agentic tool",
      "Custom instructions and memory",
      "Real library use cases for agentic AI",
    ],
    objectives: [
      "Explain what an AI agent is and how it differs from a standard AI chatbot",
      "Set up a Claude Project with custom instructions and persistent context for a library workflow",
      "Identify at least two library workflows where agentic AI would reduce manual work",
      "Understand the risks of agentic AI and when human oversight is required",
      "Evaluate whether an agentic AI approach is appropriate for a specific library task",
    ],
    estimatedMinutes: 50,
    status: "coming-soon",
    isGap: true,
    description:
      "AI agents take actions rather than just answering questions. Understanding what they are, and what library workflows they could handle, is the next frontier for digital librarians.",
    relatedModules: [
      "automating-repetitive-tasks",
      "vibe coding-for-librarians",
      "ai-library-systems-integration",
    ],
    content: {
      intro:
        "The word 'agent' is getting used to mean a lot of different things right now, from simple chatbots with a fancy name to genuinely autonomous systems that can take actions in the world. As a librarian, you don't need to sort out the technical debates. You need to know what's actually available today, what it can do, and where it fits into library work. That's what this module covers.",
      sections: [
        {
          heading: "Agents vs. chatbots: the real difference",
          body: `A chatbot responds to a prompt. An agent pursues a goal.

When you ask ChatGPT to write an email, it writes the email. That's a chatbot interaction: one input, one output, done.

An agent given the same goal might: look at your existing emails to match your tone, check your calendar to see if the meeting is still on, draft the email, wait for your approval, then send it. Multiple steps, some of them taking action in the world (sending email, checking calendar), orchestrated toward a goal rather than responding to a single prompt.

The key characteristics of agentic AI:
- **Multistep:** Breaks a goal into steps and executes them in sequence
- **Tool use:** Can take actions: search the web, read files, run code, call APIs, and send messages
- **Memory:** Can retain information across steps within a task
- **Judgment:** Makes decisions about what to do next based on results

Most of what librarians encounter today sits on a spectrum. Claude Projects and ChatGPT Projects are at the light end; they're not truly autonomous, but they persist context and can do more than a single turn chatbot. Fully autonomous agents that execute multistep library tasks without human oversight are emerging but not yet common in library practice.`,
        },
        {
          heading: "Claude Projects: your practical starting point",
          body: `Claude Projects is the most accessible agentic adjacent tool for library work right now. It's not a full agent; it doesn't take autonomous actions without your input, but it functions as a persistent, context aware workspace that behaves more like a capable assistant than a search engine.

**What makes a Project different from a regular Claude conversation:**
- Custom instructions persist across every conversation in the project
- You can upload files that Claude references throughout
- Conversation history within the project informs future responses
- You can create multiple projects for different library contexts

**A practical library Project setup:**

*Reference Desk Project:*
Custom instructions: "You are an assistant to a reference librarian at a community college library. Our patron population is primarily first generation college students and working adults. Always recommend specific databases from our list rather than generic suggestions. Tone: warm, clear, jargon free."

Uploaded files: Your database list with descriptions. Your library's FAQ document. Your research guide template.

Now every conversation in this project has that context. You do not restate your context. You paste a patron's question and ask: "Draft a response to this patron." Claude knows your institution, your databases, your tone.

*Instruction Design Project:*
Custom instructions: "You help design library instruction sessions. Our students are in 100-level and 200-level courses. Sessions are typically 50 minutes. We follow the ACRL Framework."

Uploaded files: Your existing lesson plans. Sample assignments from common courses.

Ask it: "There is a 50-minute session with ENG 102 next week. They're starting a research paper. Draft a lesson plan." It draws on your existing plans as templates.`,
        },
        {
          heading: "What agentic AI can realistically do in libraries today",
          body: `There's a gap between what vendors claim agents can do and what's practical in library settings right now. Here's an honest assessment.

**Practical today:**
- Multistep research assistance: agent searches, reads results, synthesizes, asks follow up questions, produces a structured report
- Document processing pipelines: ingest a set of documents, extract specific information, compile into a structured output
- Conversational interfaces for library FAQs: an agent that can answer questions about library services by referencing a knowledge base you provide
- Workflow assistance: walking through a multistep process (e.g., guiding a patron through interlibrary loan from start to finish)

**Emerging but not yet reliable:**
- Fully autonomous catalog record creation without human review
- Autonomous management of patron communications
- Multisystem workflows (agent takes action in ILS, sends email, updates spreadsheet) without human approval steps

**Requires careful evaluation:**
Any agentic system that takes action in a patron facing context. The speed of agentic AI means mistakes propagate quickly. Human oversight at key points isn't optional for patron facing work.`,
        },
        {
          heading: "Memory and custom instructions: building a persistent assistant",
          body: `The most practically useful agentic feature available today is not autonomous task execution but persistent memory and context. Here's how to use it well.

**Custom instructions are the highest leverage investment:**
A well written set of custom instructions for Claude or ChatGPT is essentially a standing briefing for your AI assistant. Spend 30 minutes writing good custom instructions once and benefit from them across every interaction.

What to include in library custom instructions:
- Your institution type and size ("community college, 8,000 students")
- Your patron population characteristics
- Your role and primary responsibilities
- Preferred tone for different outputs (patron facing vs. internal)
- Specific databases or resources to reference
- What you don't want ("never suggest Wikipedia as a primary source")
- Your institution's stance on AI ("we use AI generated content with disclosure and review")

**Memory features (where available):**
Some AI tools now offer memory that persists across conversations, not just within a project, but over time. Claude's memory feature (where enabled) and ChatGPT's memory let the AI remember things you tell it to. This is useful for: preferences you've stated, ongoing projects, context about your library that should not need to be restated.

Treat memory features as a convenience, not a guarantee; always verify that important context is actually in the memory before relying on it for critical work.`,
        },
        {
          heading: "Real library use cases for agentic AI",
          body: `These are use cases that are practical today, not aspirational future scenarios.

**Research consultation preparation:**
Before a scheduled research consultation, give an agent the patron's stated topic and assignment description. Ask it to: identify the most relevant databases, generate a set of preliminary search terms, find any LibGuides relevant to the topic, and draft three clarifying questions to ask the patron. What used to take 15 minutes of preparation takes 3.

**Collection development scanning:**
Set up an agent (or a well structured Claude Project) to review new title lists from vendors. Upload the list, ask it to flag titles that fit specific collection criteria, check against your existing holdings list (if you upload it), and produce a prioritized recommendation list for your review. You still make the decisions; the agent does the initial filtering.

**Assessment report drafting:**
Upload your raw assessment data (survey results, usage statistics, gate counts). Ask the agent to identify the three most significant trends, draft a two paragraph narrative summary suitable for your annual report, and list three areas for follow up investigation. Your review and judgment shape the final product, but the initial synthesis happens in seconds.

**Instruction session follow up:**
After a library instruction session, upload your notes and any patron feedback. Ask the agent to draft a follow up email to the course instructor summarizing what was covered and suggesting three ways the library can continue to support the course. Personalized, useful, and done in two minutes.`,
        },
      ],
      practitionerNote:
        "A Claude Project configured for instruction design pays for setup time within the first week of use. The most significant change is not speed but consistency: sessions designed with access to previous lesson plans as templates start from a better baseline than those designed without that context.",
    },
  },

  {
    id: 14,
    slug: "vibe coding-for-librarians",
    title: "Vibe coding for librarians",
    level: "advanced",
    audience: "both",
    acrlCompetencies: ["application"],
    acrlSubCompetencies: ["4.4", "4.1"],
    topics: [
      "Building functional tools without programming knowledge",
      "Plain language to working application: the vibe coding workflow",
      "Tools: Lovable, Replit, Claude",
      "Real library tools built this way",
      "When to build vs. when to configure",
      "Risks: code opacity, security, maintenance, and professional judgment",
      "Vibe coding and the vendor relationship",
      "Building an equitable and sustainable practice",
    ],
    objectives: [
      "Build a simple functional tool using plain language prompts to an AI coding tool",
      "Describe the vibe coding workflow and how it differs from traditional software development",
      "Identify three library workflow problems that could be addressed with a custom built tool",
      "Evaluate when building a tool is the right approach versus configuring or purchasing an existing one",
      "Articulate the five primary risks of vibe coded tools and how to mitigate each in a library context",
      "Apply a documentation standard to a tool you have built, including what it does, what data it touches, and what it cannot do",
      "Identify equity considerations in making AI coding tools available to library staff",
      "Assess a proposed vibe coded tool for appropriateness relative to your institution's patron privacy and security obligations",
    ],
    estimatedMinutes: 35,
    status: "coming-soon",
    isGap: true,
    description:
      "The first practitioner focused vibe coding curriculum for librarians. No programming required. You will describe what you want in plain language and watch it become a working tool. We will build real library tools together, and we will also reckon honestly with the risks.",
    relatedModules: [
      "automating-repetitive-tasks",
      "agentic-ai-what-it-means",
      "ai-library-systems-integration",
    ],
    content: {
      intro:
        "In February 2025, Andrej Karpathy, one of the foundational researchers behind modern artificial intelligence and former director of AI at Tesla, introduced a term that has since entered the vocabulary of technology practitioners worldwide. Vibe coding, as he defined it, is a mode of software development in which one describes a desired tool in plain language and allows an AI system to write the underlying code. His framing was deliberately informal: 'I just see stuff, say stuff, run stuff, and copy paste stuff, and it mostly works.' What he did not say, and what this module takes seriously, is that a librarian with no programming background can use exactly this workflow. This module shows you how to do it, and shows you what to watch for when you do.",
      sections: [
        {
          heading: "What vibe coding is, and why it is a library problem",
          body: `Vibe coding is building software by describing what one wants in plain language and allowing an AI to write the underlying code. There is no programming involved on the part of the person doing the building. One describes the tool, reviews what the AI produces, describes what should change, and iterates until the result is functional. The process is conversational rather than technical.

This is a genuine shift. For most of the history of software development, building a custom tool required either programming knowledge or a budget sufficient to hire someone who had it. Academic libraries have faced a specific version of this constraint for decades: tool needs that are too particular for a vendor product, too small to justify a development contract, and too complex to solve without code. The result has been a persistent accumulation of workarounds: spreadsheets managing workflows that deserve proper tools, paper processes persisting because no one could build the replacement, staff time spent on tasks that could be automated if automation were accessible.

Vibe coding closes some of that gap. It is worth naming honestly why this capability is appealing in a library context, because understanding the motivation is part of using the capability responsibly. In a May 2026 article in C&RL News, Ava Wallace, an LIS student writing alongside a library director and a senior leader in the profession, describes AI tools generally as measures that address a chronic funding crisis, useful precisely because libraries have been asked to do more with less for so long, but not a substitute for the sustainable investment communities actually need. That framing applies directly to vibe coding. It is a workaround made newly accessible, and naming it as such is more honest than describing it as a solution.

For example, the following tools are now within reach of a librarian with no programming background:
- A citation scavenger hunt tool for library instruction sessions
- A database recommendation quiz that matches patrons to the right resource based on three questions
- A research log template that students complete as they work through a project
- A simple intake form that routes patron requests to the appropriate librarian
- An interactive checklist for evaluating sources
- A subject specific glossary for patrons in a technical field
- A quiz that tests whether students can identify a hallucinated citation

None of these require programming knowledge. They require the ability to describe what one wants clearly enough that an AI system can build it.

There is one constraint worth naming directly at the outset: vibe coded tools are functional, not polished enterprise software. They work. They are reasonable in appearance. For patron facing tools that must be sustained over multiple years, vibe coding is best understood as a rapid prototyping approach: a way to test whether a tool is worth building properly. For internal staff tools, it frequently serves as the final product.`,
        },
        {
          heading: "The tools to know",
          body: `**Lovable (lovable.dev)** is the most beginner accessible vibe coding tool currently available. One describes an application in a chat interface, Lovable builds it, and a live preview appears immediately. The tool is designed to produce web applications that look polished without requiring the builder to make design decisions. It is the recommended starting point for most library vibe coding projects.

Strengths: Strong default design, straightforward iteration, live preview. Well suited to patron facing tools where visual quality matters.
Limitations: Less control over structural decisions; complex logic can be difficult to implement precisely.
Pricing: Free tier has limited builds. Paid tier ($20/month) is appropriate for active use.

**Replit (replit.com)** is a development environment with strong AI assistance built in. It is more flexible than Lovable and supports a wider range of project types. The AI within Replit, called Agent, can build more complex tools and allows the builder to see and interact with the code directly if they choose.

Strengths: Very flexible, handles complex requirements, supports more unusual tool configurations. Appropriate for tools that need capabilities Lovable cannot provide.
Limitations: Defaults are less visually polished; requires slightly more comfort with iteration.
Pricing: Free tier is functional for most library tool builds.

**Claude (claude.ai) or ChatGPT directly**: One describes a tool in plain language and asks the AI to write the code. The AI produces code that is then pasted into a text file with an .html extension and opened in a browser. This approach works for simple self contained tools such as calculators, quizzes, and interactive pages.

Strengths: Free, immediate, works well for simple tools. Reading the code, even briefly, builds some understanding of what the tool is doing.
Limitations: Iteration is manual; each revision requires repeating the process. Requires knowing how to open an HTML file in a browser.

The recommendation for starting is Lovable for a first project. For subsequent projects that require more flexibility or complexity, Replit is the natural next step. Direct use of Claude or ChatGPT is appropriate for quick, simple tools where the overhead of a dedicated platform is not warranted.`,
        },
        {
          heading: "The vibe coding workflow: step by step",
          body: `The workflow is consistent regardless of which tool one uses. The quality of the result depends more on the quality of the description than on any other factor.

**Step 1: Write a clear description of what you want.**
Technical terms are not necessary. One should describe the tool as one would explain it to a colleague who could build anything. A useful description includes: what the tool does and why, who will use it, what inputs the user provides, what the tool shows or outputs, and roughly how it should look.

An example of an insufficient description: "Make me a library app."

An example of a description that works: "Build a web page with a simple quiz. It asks three multiple choice questions that test whether a student can identify a hallucinated citation. Each question shows a citation and asks: Real or Hallucinated? After all three questions, show the score and a brief explanation of each answer. Use a simple, clean design with a navy blue header."

The difference is specificity. The more precisely one describes the inputs, outputs, and purpose, the closer the first version will be to what is actually needed.

**Step 2: Let the AI build a first version.**
In Lovable or Replit, paste the description and allow the AI to generate. In Claude, ask it to write the HTML and JavaScript, then copy the result into a file with an .html extension.

**Step 3: Review and iterate.**
The first version will not be exactly right. That is expected. The next step is to describe what should change: "The colors are wrong. Use dark green instead of blue." "The explanation after each question is not appearing." "Add a Start Over button at the end." "The text is too small on a phone screen."

**Step 4: Test as a user.**
Move through the tool as a patron or student would. Identify what does not work as intended. Describe each problem to the AI. Repeat.

**Step 5: Share or deploy.**
Lovable and Replit both provide shareable links that work immediately. For HTML files built directly through Claude or ChatGPT, the file can be uploaded to a library website or a simple file hosting service.

The iteration cycle (describe, build, review, revise) is the core skill. It is conversational in nature, and it rewards clarity and specificity at every stage.`,
        },
        {
          heading: "Real library tools built this way",
          body: `The following examples represent tools a librarian with no programming background can build in a single afternoon or evening. They are illustrative of the category of problem vibe coding addresses well.

**Citation Reality Check** is an instruction tool presenting students with five citations, some genuine and some hallucinated by an AI, and asking them to identify which is which. Immediate feedback is provided after each selection. The tool works in any browser, requires no login, and can be shared as a link before a library instruction session or embedded in a LibGuide.

Approximate build time: 45 minutes including iteration.

**Database Matchmaker** is a reference tool that asks three questions (subject area, type of information needed, and level of depth) and recommends the library's databases based on the answers. The builder provides the recommendation logic; the AI builds the interface.

Approximate build time: 90 minutes including writing the recommendation logic.

**Research Log** is an instruction support tool presenting students with a structured form they complete as they work: their research question, search terms they tried, databases they used, sources they found useful, and questions that arose. The form allows students to export a summary of their process. It is useful for scaffolding research as a skill rather than an outcome.

Approximate build time: 60 minutes.

**Subject Glossary** is a patron support tool providing an interactive glossary for a specific subject area (nursing, legal studies, social work, environmental science) in which patrons can search terms and receive plain language definitions. The builder provides the term list; the AI builds the searchable interface.

Approximate build time: 30 minutes once the term list is prepared.

These are not complex applications. They are tools that would previously have required either a developer, a vendor product that approximated the need, or simply going without. The shift in what is accessible in a single afternoon is the point.`,
        },
        {
          heading: "When to build vs. when to configure",
          body: `Vibe coding is not always the right answer. Before building anything, it is worth asking a series of questions that will clarify whether building is the appropriate response.

**Does a tool for this already exist?** LibCal handles appointment scheduling. LibGuides handles resource organization. Most integrated library systems and discovery layers have features that are underused. Configuring an existing tool often solves a problem faster and more sustainably than building a new one. Before building, investigate what is already available.

**Does it need to integrate with another system?** If the tool must connect to an ILS, Alma, a database, or another institutional system, vibe coding can produce a starting point but will frequently encounter its limits quickly. Integration typically requires API access and more than vibe coding alone can provide.

**Does it need to be maintained over the long term?** Vibe coded tools are easy to build and can be fragile to maintain, particularly when the person who built them is no longer available. For tools that need to function reliably over years, a formal development project or a vendor product may be the more appropriate answer, even if it is slower.

**Is it patron facing and high stakes?** A broken patron facing tool erodes trust. Any tool deployed to patrons should be tested extensively and should have a plan for when something goes wrong, including when the person who built it cannot diagnose the problem.

When building is the right choice:
- Prototyping an idea before committing to a formal build
- Internal tools used only by staff
- One time instruction tools such as quizzes, games, or demonstrations
- Tools so specific to a local context that no vendor product could address them
- Any situation where the iteration speed of vibe coding is itself a meaningful advantage`,
        },
        {
          heading: "The risks you must take seriously",
          body: `The most important characteristic of vibe coding is also its most significant liability: the person who builds the tool does not know what the code is doing. This is not a temporary limitation that will be engineered away. It is structural to the approach. Understanding the risks this creates is a professional obligation, not an optional consideration.

**The code opacity problem.** When a librarian builds a tool using vibe coding, the resulting code is produced by an AI and may be dozens or hundreds of lines long. The builder almost certainly cannot read it. They cannot tell whether it is handling edge cases correctly, what happens when a data format changes, or what occurs when a user does something unexpected. The tool works until it does not, and when it does not, the builder may have no way to diagnose why. This is acceptable for low stakes internal tools. It is not acceptable for any tool that gates access to resources, stores patron data, or makes decisions with meaningful consequences for patrons or the institution.

**Security and patron privacy.** Patron data carries professional and often legal protection obligations. A vibe coded tool that is connected to patron records, authentication systems, or personally identifiable information requires review by someone with security expertise before it is deployed. There is no exception to this. An acquisitions reporting tool that processes only institutional financial data carries different risk than a tool that handles student research records or reference requests. The distinction must be made explicitly before any tool goes live.

**Maintenance and institutional memory.** A vibe coded tool was built through a conversational process with an AI. That conversation is gone. When the person who built the tool leaves the institution, or simply cannot remember what decisions were made during iteration, the tool becomes effectively unmaintainable by a successor who cannot read the code. Libraries have long faced the problem of institutional knowledge residing in individual staff members rather than documentation. Vibe coded tools create a particularly fragile version of that problem.

**Skills that may not develop.** In a May 2026 article in C&RL News, Trevor A. Dawes articulates a concern about AI generally that applies directly here: when AI can instantly generate seemingly plausible answers, patrons and staff may lose the capacity to evaluate sources, understand what a system is producing, or distinguish synthesis from analysis. The same dynamic operates in vibe coding. A librarian who learns to build tools entirely through AI assistance from the beginning of their career may not develop the data literacy to understand what a query is returning, what a formula is calculating, or what an algorithm is selecting. This is worth examining carefully in any staff development program built around these tools.

**Equity across library staff.** Research published in C&RL News in May 2026 makes a point that applies directly here: free is not the same as full. The AI tools that make vibe coding effective (Claude Pro, Cursor, GitHub Copilot) are subscription products. The librarians currently using these tools are, in most cases, the librarians who already had the technical curiosity to experiment, the institutional latitude to try new approaches, and access to paid tools through personal subscriptions or existing institutional licenses. If vibe coding becomes a meaningful capability for library services, treating it as something individual staff must procure on their own creates a two tier workforce. Equitable access to the tools is a prerequisite to equitable distribution of the capability.`,
        },
        {
          heading: "Vibe coding and the vendor relationship",
          body: `There is a consequence of this capability that is directly relevant to the relationships academic libraries have with their technology vendors, and it deserves explicit attention.

The frustration with vendor lock in is a recurring theme in library technology conversations: platforms that do not quite do what a library needs, feature requests that wait years for implementation, interfaces designed for an average use case that does not match a specific institution's workflows. For decades, the practical response to "why can we not simply build what we need ourselves?" was consistent: because building requires developers, developers cost money, and libraries do not have that budget.

Vibe coding changes that calculation. Not entirely; integrated library systems, discovery layers, and electronic resource management platforms are not going to be replaced by vibe coded applications. However, for the category of small, workflow specific tools that libraries have always needed and never been able to build, the barrier has dropped from "requires a developer" to "requires a clear description and an afternoon."

A librarian who can produce a working prototype of a needed tool in three days is in a different position in conversations with a vendor about feature timelines. This does not mean building a workaround is always the right response to a missing vendor feature; it may not be sustainable, and it may create maintenance burdens that exceed the original problem. However, it does mean that the question of where to invest in building versus where to rely on a vendor has become genuinely worth asking in a way it may not have been five years ago.

Libraries can and should think strategically about this. For workflow specific tools that a vendor is unlikely to build, and for which the maintenance burden is manageable, building is increasingly a realistic choice. For tools that need to be integrated with core systems, that must be sustained over many years, or that require security level reliability, vendor relationships and formal development remain the right answer. Making that distinction clearly, rather than defaulting to either "we cannot build anything" or "we can build everything," is part of what it means to approach this capability as a professional.`,
        },
        {
          heading: "Building a sustainable practice, not just a single tool",
          body: `The most useful framing for approaching vibe coding as a library professional comes from Ava Wallace, writing in C&RL News in May 2026: "Literacy does not only mean how to use something. It also means how to think critically about it, how to assess its accuracy, and how to determine when it is or is not an appropriate tool to turn to." That definition (literacy as judgment, not merely adoption) is the correct frame for building a vibe coding practice in a library.

The goal is not staff members who can build anything using AI tools. The goal is staff members who understand what they are building, know what the tool cannot do, recognize when to stop, and have documented what they have made clearly enough that someone else can use and maintain it. That is a library value applied to a new capability, not a technology value imposed from outside the profession.

In order to build a sustainable practice, the following principles are worth establishing at the outset.

**Start with low stakes internal tools.** Data cleaning, reporting, internal routing, and prototype instruction tools are the appropriate initial experiments. Patron facing systems and anything connected to authentication or core library systems are not appropriate starting points, regardless of how promising the prototype looks.

**Find the people who are already doing this.** In most libraries, at least one staff member is already building tools this way without calling it vibe coding. Finding those people, giving them time and access to appropriate tools, and learning from what they have already built is more productive than creating a formal program from scratch.

**Establish documentation habits before they are needed.** When a tool is built, the builder should produce a single page summary at minimum: what the tool does, what data it touches, what it cannot do, what assumptions were made during the build, and who to contact when something breaks. This does not resolve the institutional memory problem entirely, but it reduces the damage when the builder is unavailable.

**Treat tool access as an equity question.** If vibe coding is going to be a meaningful capability for library services, access to the AI tools that make it possible should not depend on individual staff subscriptions. Such a situation is structurally equivalent to giving some staff access to library databases and not others; the resource should be available equitably, or the capability cannot be deployed equitably.

**Engage IT before deploying anything.** Security considerations, data handling requirements, and acceptable use policies are far easier to address before a tool is live than after. A disagreement about policy discovered in advance is preferable to one discovered retroactively.

The question for academic libraries is not whether vibe coding belongs in this environment. It is already here. The question is whether libraries will approach it with the same professional intentionality they bring to any new capability: evaluating it critically, deploying it equitably, and sustaining it with the institutional care that patron trust requires. Those habits are already in the profession. Applying them to this new capability is the work.`,
        },
      ],
      practitionerNote:
        "A citation evaluation quiz for a library instruction session is a reliable first vibe coding project: describe the purpose, the format of each question, and the feedback students should receive, paste the resulting HTML into a file, and a usable tool typically emerges in twenty minutes. Such a tool can be revised repeatedly, each time by describing the change rather than touching the code. Students engage with it differently than they do with a slideshow: they are doing something rather than watching something. A database recommendation form for the reference desk is a natural second project, typically taking closer to two hours including iteration, because the logic connecting answers to recommendations is more complex than an initial description captures. Neither of these tools could be built without an AI writing the code. The builder can describe precisely what each tool does but cannot read the code that makes it work. That asymmetry is real, and it should be held in mind every time a new idea is evaluated for whether this approach is appropriate or whether it requires something more robust.",
      summary: [
        "Vibe coding is the practice of building functional software by describing what is needed in plain language, with no programming knowledge required. It is already in use in academic libraries, often without a name for it.",
        "The most beginner accessible tools are Lovable, Replit, and direct use of Claude or ChatGPT. Each has different strengths; Lovable is the recommended starting point for most library use cases.",
        "The core workflow is five steps: write a clear description, let the AI build a first version, review and iterate, test as a user, and deploy or share. The quality of the initial description determines most of the outcome.",
        "Vibe coded tools carry real professional risks: code opacity, security and privacy liability, maintenance fragility, potential skills gaps, and inequitable access across staff. Each requires explicit attention, not assumption.",
        "The capability shifts the relationship with vendors. When building a workaround takes days rather than years, the question of where to build versus where to configure versus where to advocate for a vendor feature becomes genuinely worth asking.",
        "The goal is not tool adoption; it is tool literacy: knowing what a tool does, what it cannot do, when it is the right approach, and how to document and sustain it. That is a library value, not a technology value.",
      ],
    },
  },

  {
    id: 15,
    slug: "ai-library-systems-integration",
    title: "AI & library systems integration",
    level: "advanced",
    audience: "digital",
    acrlCompetencies: ["application", "analysis"],
    acrlSubCompetencies: ["4.1", "4.4", "3.2"],
    topics: [
      "APIs explained without jargon",
      "Connecting AI to your ILS",
      "Repository automation",
      "Data pipelines for library systems",
      "Build vs. configure vs. ask your vendor",
    ],
    objectives: [
      "Explain what an API is and how it enables AI integration with library systems",
      "Identify integration opportunities between your ILS and AI tools",
      "Evaluate whether to build, configure, or advocate for a vendor feature",
      "Understand the data pipeline concept in the context of library systems",
      "Read basic API documentation well enough to evaluate integration possibilities",
    ],
    estimatedMinutes: 60,
    status: "coming-soon",
    isGap: true,
    description:
      "For digital librarians ready to connect AI to the systems they manage (ILS, repositories, discovery layers) without a computer science degree. This module demystifies APIs and shows you what's actually possible.",
    relatedModules: [
      "automating-repetitive-tasks",
      "vibe coding-for-librarians",
      "metadata-and-cataloging",
    ],
    content: {
      intro:
        "The most common question among digital librarians about AI integration is: 'Is this something I can actually do, or do I need a developer?' The honest answer is: some of it you can do yourself, some of it you can do with help from AI tools, and some of it genuinely requires a developer or a vendor. This module helps you know which is which.",
      sections: [
        {
          heading: "What an API is: the plain language version",
          body: `API stands for Application Programming Interface. Ignore the acronym. What it means in practice: a way for two software systems to talk to each other.

When you search for an article in your discovery layer and it pulls results from multiple databases simultaneously, APIs are how that works. When your ILS updates your website's "hours today" display automatically, that's an API. When a new book order in your acquisitions system creates a record in your catalog, an API is usually involved.

An API is a defined channel with rules: you send a request in a specific format, the other system sends back a response in a specific format. The formats are standardized so different systems can communicate without being built by the same people.

**Why this matters for AI:**
AI tools increasingly have APIs. This means you can connect an AI to other systems, so instead of manually copying text from one place into an AI prompt, the connection is automatic. Your ILS can send records to an AI for processing. Your repository can request AI generated metadata. Your chat reference tool can use AI to draft responses.

You don't need to build these connections yourself. But understanding that they exist, and what they can do, changes how you evaluate vendor products and what you advocate for with your IT department.`,
        },
        {
          heading: "What's actually possible with your ILS",
          body: `This depends heavily on which ILS you use and your institution's technical environment. Here's a realistic overview.

**Alma (Ex Libris):**
Alma has a well documented API and an active developer community. Ex Libris also offers LibOW (Library Open Workflow), a no code/low code automation platform that connects Alma to external services including AI tools. If you're on Alma, LibOW is worth investigating before building anything custom; it may already do what you need.

Realistic AI integrations for Alma: automated metadata enhancement on import, batch processing of records through an AI service, automated notification workflows, reporting and analytics fed from Alma data.

**Sierra / Innovative:**
Older API architecture but functional. Custom integrations are possible but typically require developer involvement. Check with your vendor about AI integrations on their roadmap.

**Koha (open source):**
As open source software, Koha is more flexible for custom integrations, if you have technical staff. The community is active and has members building AI adjacent tools.

**The vendor question:**
Before building any custom integration, ask your ILS vendor: "What AI integrations do you currently support or have on your roadmap?" Vendors are building these features actively. You may be one release away from a supported solution that's better than something you'd build yourself.`,
        },
        {
          heading: "Institutional repositories and AI",
          body: `IR platforms have more accessible AI integration opportunities than ILS systems, partly because they're often simpler systems and partly because the AI use cases (metadata enhancement, description generation, discoverability improvement) are so clear.

**DSpace:**
DSpace has an active community building AI integrations for metadata suggestion and quality control. If your institution runs DSpace, check the DSpace community forums for current developments.

**bepress / Digital Commons:**
Vendor managed platform with limited custom integration capability. Advocate with your vendor for AI metadata features; they're likely building them.

**Samvera / Hyrax:**
Open source and highly customizable. Active development community. Good candidate for custom AI integration if you have technical staff or institutional developer support.

**What's practical for most IR administrators today:**
Even without API integration, you can build a semi automated AI assisted metadata workflow: export records as CSV, process them through AI in batches (adding descriptions, suggesting subjects, normalizing fields), import the enhanced records back. This is a manual workflow, not an integration, but it's accessible without technical help and produces real improvements.`,
        },
        {
          heading: "Data pipelines: what they are and when you need one",
          body: `A data pipeline is a process that takes data from one place, does something to it, and puts it somewhere else, automatically and repeatedly.

In library contexts, a simple data pipeline might be: pull new catalog records nightly → send them to an AI service for subject enrichment → load the enriched records back into the catalog. This runs automatically on a schedule without manual intervention.

**When you need a pipeline (vs. a one time batch process):**
- The process needs to run regularly (daily, weekly, on new arrivals)
- The volume is too large to handle manually
- The data source and destination both have accessible APIs

**When a batch process is sufficient:**
- You're doing this once or infrequently
- Volume is manageable manually
- You don't have API access to the systems involved

**Building vs. advocating:**
For most digital librarians without developer support, true data pipelines are not DIY projects. They require API access, server infrastructure, and error handling. The more practical path: advocate for this capability with your vendor or IT department, using the business case from Module 11. Understand what's possible so you can have an informed conversation, not so you can build it yourself.

The exception: if your institution has developer support (a library developer, an IT partner, or even a work study student with coding skills), you can describe the pipeline you need. Understanding what a pipeline is and what it should do is the hard part; the implementation, with developer help, is more straightforward than it sounds.`,
        },
        {
          heading: "Build vs. configure vs. ask your vendor",
          body: `Every AI integration decision for library systems comes down to this choice. Here's a decision framework.

**Ask your vendor first when:**
- You're on a commercial platform (Alma, Sierra, Digital Commons, etc.)
- The use case is general enough that other libraries likely want it too
- You're not willing to maintain custom code long term
- Your IT/admin environment restricts what you can install or run

**Configure an existing tool when:**
- A tool exists that does approximately what you need
- The configuration requires no custom code (Zapier, Make, LibOW)
- The time investment is in setup, not development

**Build (with developer support) when:**
- The use case is specific to your institution's workflow
- Vendor products don't address it and won't anytime soon
- You have developer support available
- The benefit justifies the maintenance cost

**Vibe code (from Module 14) when:**
- The tool is standalone, not integrated with a library system
- The use case is for instruction, patron support, or internal use
- No integration with ILS or external databases is needed
- A working prototype is more valuable right now than a polished product

The most common mistake: trying to build what a vendor should provide. If forty libraries need the same metadata enhancement feature, one of them building it is a bad outcome; it should be in the product. Advocate first, build second.`,
        },
      ],
      practitionerNote:
        "A common pattern in systems integration work is spending significant time building a custom solution before asking the vendor directly. The answer, when the vendor is finally asked, is sometimes that the feature is already on the roadmap for the next release. That conversation takes fifteen minutes. The lesson: always ask the vendor before building. Sometimes the answer is no. But sometimes the feature ships in the next release.",
    },
  },

  {
    id: 16,
    slug: "your-ai-strategy-next-steps",
    title: "Your AI strategy & next steps",
    level: "advanced",
    audience: "both",
    acrlCompetencies: ["ethics", "analysis", "application"],
    acrlSubCompetencies: ["2.3", "1.5", "4.2"],
    topics: [
      "Building a department AI roadmap",
      "Staying current without being overwhelmed",
      "Contributing to the profession",
      "Conference speaking on AI topics",
      "Community building and peer networks",
    ],
    objectives: [
      "Draft a 12-month AI learning and implementation roadmap for yourself or your department",
      "Identify two or three communities of practice for ongoing AI professional development",
      "Outline a conference presentation proposal on a library AI topic",
      "Develop a system for staying current with AI developments in library contexts",
      "Define your own position and contribution as a practitioner voice in the AI conversation",
    ],
    estimatedMinutes: 45,
    status: "coming-soon",
    isGap: true,
    description:
      "Completing this curriculum is a beginning. This module helps you build the ongoing practice, community, and professional presence that turns a learning journey into a professional identity.",
    relatedModules: [
      "making-the-case-to-administration",
      "automating-repetitive-tasks",
      "vibe coding-for-librarians",
    ],
    content: {
      intro:
        "You've worked through fifteen modules. You have a mental model of how AI works, practical experience with tools, a prompt library in progress, and at least one workflow that runs differently than it did before. The question this module addresses is: what now? Not what to learn next, but what kind of practitioner do you want to be in the AI conversation your profession is having right now?",
      sections: [
        {
          heading: "Building a 12-month AI roadmap",
          body: `A roadmap is useful not because AI moves slowly enough for plans to hold (it does not), but because deciding in advance what you want to accomplish forces prioritization. Without it, you respond to whatever AI news cycle is loudest rather than building deliberately toward something.

**A simple roadmap structure:**

Months 1–3: Deepen practice
Pick two or three workflows where you've experimented with AI and make them systematic. Write prompt library entries for them. Measure the time difference. Build the habit of using AI for those specific tasks before expanding to new ones.

Months 4–6: One visible contribution
Write one thing (a LibGuide, a short article for your library's newsletter, a presentation for a staff meeting) that shares what you've learned with colleagues. The act of explaining forces clarity. The visibility builds your professional reputation.

Months 7–9: Extend to department
Identify one colleague who is curious but cautious about AI. Show them one specific workflow where AI helps you. Don't try to convert skeptics or train your whole team. Find one person and show them one thing.

Months 10–12: Evaluate and reset
What worked? What didn't? What has changed in the AI landscape that changes your approach? Reset the roadmap for the next year based on what you've learned.

This is a personal roadmap, not a departmental one. A departmental AI strategy is a separate project, covered in Module 11.`,
        },
        {
          heading: "Staying current without being overwhelmed",
          body: `The AI news cycle is designed to create urgency. Most of what gets coverage is either further away than it sounds, less relevant to library practice than the headline implies, or a product announcement dressed as a development.

**A sustainable information diet for AI in libraries:**

*Weekly:* LibTech Insights (LTI): one newsletter covering AI in libraries. Skim the headlines, read what's relevant to your role. This is enough.

*Monthly:* One deeper read: a journal article, a conference proceeding, or an ARL or ACRL publication. Library Technology Reports (ALA TechSource) covers AI regularly.

*Annually:* Pulse of the Library (Clarivate): the benchmark survey. Check the new figures. Update your framing of the field.

*On demand:* When a specific tool or use case comes up in your work, look it up then. Don't pre research everything.

**What to filter out:**
- Vendor announcements (marketing dressed as news)
- General AI news not specific to library contexts (interesting but rarely actionable)
- "AI will replace librarians" takes (not worth your attention)
- Any claim that a tool is transformative before it's been in practice for at least six months

The ACRL competency 2.3 asks you to "stay current with AI applications via reliable sources." Reliable means curated, professional, and library specific. Not Twitter. Not press releases.`,
        },
        {
          heading: "Contributing to the profession",
          body: `The practitioner voice in AI conversations about libraries is underrepresented. Most of what gets published comes from vendors, researchers, or administrators. People who actually sit at reference desks and test these tools in real workflows and write honestly about what they find are rare and valuable.

**Ways to contribute, ordered by investment:**

*Low investment:*
Comment thoughtfully on LinkedIn posts about library AI. Respond to surveys from professional organizations. Share what you're learning with your immediate colleagues.

*Medium investment:*
Write a short piece for your library's internal newsletter or staff blog. Propose a session at a regional library conference (local is easier to get into than national). Respond to a journal call for practitioner perspectives.

*Higher investment:*
Submit a proposal to a national conference (ALA, ACRL, ER&L). Write a piece for a peer reviewed library journal. Develop a workshop you could offer to other libraries.

**The practitioner advantage:**
You have something researchers and vendors don't: daily practice in a specific institutional context. The honest answer to "does this AI tool actually help with reference consultations at a community college?" is more valuable than the vendor demo. Write from that specificity.`,
        },
        {
          heading: "Conference speaking on AI topics",
          body: `Conference proposals on AI are getting submitted in large numbers. The ones that get accepted are specific, practitioner grounded, and honest about limitations.

**What gets rejected:**
- "AI in libraries: an overview"
- "The future of AI and library services"
- Anything that reads like a vendor demo
- Anything that could have been written without actually using AI in a library

**What gets accepted:**
- "What six months of AI use in research consultations at a community college reveals"
- "Building a custom citation evaluation tool for library instruction with no programming experience"
- "Why our AI pilot failed, and what we did next"
- "Comparing three AI tools for metadata enhancement: what the reviews don't tell you"

**The proposal formula that works:**
State the specific problem. State what you tried. State what you found, including what didn't work. State what attendees will take away. Be honest about context ("this is a community college context with a specific student population").

**Where to start:**
Regional and state library conferences are much more accessible than national ones. A successful regional session is the best credential for a national proposal. ACRL, ALA Annual, and ER&L all have competitive submission processes; a track record of regional speaking helps significantly.`,
        },
        {
          heading: "Community and what comes next",
          body: `The most durable professional development is peer to peer. Communities of practitioners sharing what works, what doesn't, and what's changed are more valuable than any static curriculum, including this one.

**Communities worth joining:**

LITA (Library Information Technology Association), now merged into ALA's Core division. The interest groups and listservs covering library technology are where working practitioners discuss specific tools and implementation challenges.

AIRUS (AI in Reference & User Services): the most relevant interest group for practicing reference librarians working with AI.

Library Technology Report communities: readers and contributors tend to be thoughtful practitioners, not just cheerleaders.

LinkedIn: noisy, but filtered well (follow specific practitioners, not just hashtags), it surfaces genuine practitioner perspectives. The library AI community on LinkedIn is active and diverse.

**On this portal:**
This curriculum will update as tools and practice evolve. The newsletter is how you'll know when new content publishes or existing content gets revised. The goal of this portal is not to be a static reference; it's to stay current with what's actually happening in library practice.

**A final note:**
The 7% of U.S. librarians who report optimism about AI (from the 2025 Pulse of the Library data) don't need to be a permanent minority. The gap between that 7% and the 27–31% in other parts of the world isn't a technology gap. It's a training gap, a support gap, and a confidence gap. That's exactly what this curriculum was built to address. If it helped, share it with a colleague who's still on the fence.`,
        },
      ],
      practitionerNote:
        "The shift from practitioner to practitioner voice happens when one begins taking notes on what works and what does not, writing things down, and saying yes to presenting at staff meetings, then at a regional conference, then further. None of that requires being the most technical person in the room. It requires being the most honest.",
    },
  },
];

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}

export function getModulesByLevel(level: string): Module[] {
  return modules.filter((m) => m.level === level);
}

export function getPublishedModules(): Module[] {
  return modules.filter((m) => m.status === "published");
}

export const levelMeta = {
  foundations: {
    label: "Level 1: Foundations",
    shortLabel: "Foundations",
    description:
      "Build your AI foundation: how it works, how to talk to it, which tools to use, and how to think critically about what it produces.",
    color: "forest",
    number: 1,
    slug: "foundations",
    audience: "Both audiences",
  },
  applied: {
    label: "Level 2: Applied",
    shortLabel: "Applied",
    description:
      "Put AI to work in real library workflows: research support, instruction, metadata, reference, and making the case to leadership.",
    color: "navy",
    number: 2,
    slug: "applied",
    audience: "Role split",
  },
  advanced: {
    label: "Level 3: Advanced",
    shortLabel: "Advanced",
    description:
      "Build, automate, and integrate: the modules no one else is teaching. Vibe coding, agentic AI, workflow automation, and systems integration.",
    color: "amber",
    number: 3,
    slug: "advanced",
    audience: "Both audiences",
  },
} as const;

export const acrlCompetencyMeta = {
  ethics: { label: "Ethical Considerations", short: "Ethics" },
  knowledge: { label: "Knowledge & Understanding", short: "Knowledge" },
  analysis: { label: "Analysis & Evaluation", short: "Analysis" },
  application: { label: "Use & Application", short: "Application" },
} as const;
