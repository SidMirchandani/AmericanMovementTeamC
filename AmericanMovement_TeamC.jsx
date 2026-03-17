import React, { useState, useEffect, useRef } from "react";
import awakeningImg1 from "./assets/teamc/image-699f77e3-0a3a-4bd7-9925-02f0b5041640.png";
import awakeningImg2 from "./assets/teamc/image-25f457ad-7f57-408f-b374-a565baf43aff.png";
import awakeningImg3 from "./assets/teamc/image-31be3e7d-83e6-479c-bcfd-be5e987b6ebe.png";
import awakeningImg4 from "./assets/teamc/image-065af60c-0cdb-4078-b965-be557e4854fc.png";
import awakeningImg5 from "./assets/teamc/image-2aebc57c-5893-4c20-9cc4-ffb8dd3bb4dc.png";
import mannImg1 from "./assets/teamc/image-09eec628-190e-43da-975e-882045b3a659.png";
import mannImg2 from "./assets/teamc/image-4981266e-d3fa-42ae-8d22-f32f85c47f10.png";
import mannImg3 from "./assets/teamc/image-a5e8028c-3253-45de-b3b7-546f75b28b95.png";
import mannImg4 from "./assets/teamc/image-0fd2e7b1-3398-4923-b7f5-c0c82dcae9c8.png";
import mannImg5 from "./assets/teamc/image-74fed96c-47ea-4d8a-aae0-b577dd3d12dc.png";
import dixImg1 from "./assets/teamc/image-ac92c4ec-ff9a-488f-ae7f-eda3b70c3672.png";
import dixImg2 from "./assets/teamc/image-4a7891a7-68a6-4a4a-88d9-dd2d8121e9f5.png";
import dixImg3 from "./assets/teamc/image-4a1402e9-2dba-492a-8c8c-3ab184776f64.png";
import dixImg4 from "./assets/teamc/image-da84347a-8ef4-46c2-99ad-beffbbe81b0f.png";
import dixImg5 from "./assets/teamc/image-6003cf93-e555-4a10-8843-aada7fac86b1.png";
import temperanceImg1 from "./assets/teamc/image-056e3e29-cc57-4a29-a611-8a2e72eeba66.png";
import temperanceImg2 from "./assets/teamc/image-92b784cc-6715-492a-b29a-19becd5a6687.png";
import temperanceImg3 from "./assets/teamc/image-eb73dc82-dd8a-4297-a394-e161271e5f36.png";
import temperanceImg4 from "./assets/teamc/image-7fcf7fe0-39a5-4601-bf14-bcbb3b69dada.png";
import temperanceImg5 from "./assets/teamc/image-efb395e4-811a-4eee-affe-b89169014914.png";
import contextImg1 from "./assets/teamc/image-ee9937d9-3ad0-472e-a6db-12f11eaa3d5c.png";
import contextImg2 from "./assets/teamc/image-ae159715-2723-4974-b9a7-e052f5ee5f11.png";
import contextImg3 from "./assets/teamc/image-c4ced2bb-cc79-4124-8bc1-02f57eafe7d3.png";

/* =========================================================
   TEAM C  --  Social Reform 1815-1860
   Siddharth Mirchandani (C1), Aadit Bhave (C2), Divya Sreekumar (C3)
   ========================================================= */

const NAV_H = 52;

const C = {
  bg:        "#10141B",
  surface:   "#181E29",
  card:      "#202736",
  border:    "#313A4D",
  accent:    "#C8A96A",
  accentLo:  "#8A6B32",
  text:      "#F4F1E8",
  muted:     "#A4AEC2",
  hi:        "#FFF8E6",
};

/* ---- fonts loaded via <style> tag ---- */

/* =========================================================  DATA  */
const TEAM = [
  "Siddharth Mirchandani (C1)",
  "Aadit Bhave (C2)",
  "Divya Sreekumar (C3)",
];

const TOPICS = [
  {
    id: "awakening",
    num: "01",
    color: "#C8A96A",
    era: "1820s to 1840s",
    title: "The Second Great Awakening",
    subtitle: "A Revival That Reshaped a Nation",
    slides: [
      {
        label: "Background",
        imgSrc: awakeningImg1,
        bullets: [
          "Early 1800s religious revival movement",
          "Reaction against Enlightenment rationalism",
          "Emphasized personal spiritual experience",
          "Spread widely across frontier regions",
          "Inspired later reform movements",
        ],
        imgAlt: "Cinematic frontier camp revival meeting at sunset with preacher on stage and crowd gathered",
      },
      {
        label: "Key Beliefs",
        imgSrc: awakeningImg2,
        bullets: [
          "Personal relationship with God",
          "Salvation open to all people",
          "Emotional preaching and worship",
          "Individuals responsible for morality",
          "Faith should improve society",
        ],
        imgAlt: "Cartoon-style illustration of diverse people praying and worshipping together",
      },
      {
        label: "Spread of Movement",
        imgSrc: awakeningImg3,
        bullets: [
          "Camp meetings drew massive crowds",
          "Methodist and Baptist membership surged",
          "Frontier preachers traveled widely",
          "Women strongly participated in churches",
          "Churches expanded across nation",
        ],
        imgAlt: "Scene of traveling preacher riding horseback along a frontier road toward a town",
      },
      {
        label: "Impact on Reform",
        imgSrc: awakeningImg4,
        bullets: [
          "Encouraged abolitionist movement growth",
          "Inspired temperance reform efforts",
          "Supported expansion of education",
          "Motivated prison reform campaigns",
          "Promoted humanitarian social reforms",
        ],
        imgAlt: "Simple cartoon timeline with arrows from revival meetings to reform movements",
      },
      {
        label: "Historical Significance",
        imgSrc: awakeningImg5,
        bullets: [
          "Transformed American religious culture",
          "Empowered ordinary believers spiritually",
          "Linked religion with reform activism",
          "Increased national church membership",
          "Influenced American moral values",
        ],
        imgAlt: "Dramatic church congregation scene filled with worshippers",
      },
    ],
    assessment: [
      {
        q: "Which statement best describes a key theological shift of the Second Great Awakening?",
        options: [
          "Individuals could choose to accept salvation through personal conversion.",
          "Salvation was predetermined by God before birth.",
          "Only ordained clergy could interpret the Bible.",
          "Church attendance was mandatory under federal law.",
        ],
        answer: 0, // A
      },
      {
        q: "How did the Second Great Awakening most directly contribute to the abolitionist movement?",
        options: [
          "It led Congress to pass the Missouri Compromise.",
          "It funded the Underground Railroad through church donations.",
          "It framed slaveholding as a moral sin individuals must reject.",
          "It established the American Colonization Society.",
        ],
        answer: 2, // C
      },
    ],
    sources: [
      "Howe, Daniel Walker. <em>What Hath God Wrought: The Transformation of America, 1815-1848.</em> Oxford University Press, 2007.",
      "Finney, Charles G. <em>Lectures on Revivals of Religion.</em> Leavitt, Lord and Company, 1835.",
    ],
  },
  {
    id: "mann",
    num: "02",
    color: "#7DB5A0",
    era: "1837 to 1848",
    title: "Horace Mann and Public Education",
    subtitle: "Building the Common School for a Democratic Republic",
    slides: [
      {
        label: "Background",
      imgSrc: mannImg1,
        bullets: [
          "Early education inconsistent and limited",
          "Many children lacked schooling access",
          "Schools often privately funded",
          "Teachers poorly trained and paid",
          "Reformers demanded better education",
        ],
        imgAlt: "Cartoon comparison of wealthy child studying and poor child working instead of schooling",
      },
      {
        label: "Horace Mann",
      imgSrc: mannImg2,
        bullets: [
          "Massachusetts education reform leader",
          "Secretary of state education board",
          "Believed education strengthens democracy",
          "Promoted universal public schooling",
          "Called education society's equalizer",
        ],
        imgAlt: "Portrait illustration of Horace Mann speaking publicly about education reform",
      },
      {
        label: "Major Reforms",
      imgSrc: mannImg3,
        bullets: [
          "Established teacher training schools",
          "Standardized school curriculum systems",
          "Improved school buildings and materials",
          "Advocated longer school terms",
          "Promoted professional teacher preparation",
        ],
        imgAlt: "Teacher training classroom scene with students learning to teach",
      },
      {
        label: "Impact on Society",
      imgSrc: mannImg4,
        bullets: [
          "More children attended school",
          "Literacy rates increased nationally",
          "Education became public responsibility",
          "Schools promoted civic values",
          "Model spread across states",
        ],
        imgAlt: "One-room schoolhouse classroom with teacher teaching multiple students",
      },
      {
        label: "Historical Significance",
      imgSrc: mannImg5,
        bullets: [
          "Foundation of modern public schools",
          "Education viewed as democratic necessity",
          "Equal opportunity emphasized strongly",
          "Inspired future education reformers",
          "Lasting influence on schooling",
        ],
        imgAlt: "Cartoon showing evolution of schools from small schoolhouse to modern school building",
      },
    ],
    assessment: [
      {
        q: "What position did Horace Mann hold that allowed him to transform American education?",
        options: [
          "U.S. Secretary of Education",
          "Secretary of the Massachusetts State Board of Education",
          "Governor of Massachusetts",
          "President of Harvard University",
        ],
        answer: 1, // B
      },
      {
        q: "What was the primary purpose of the normal schools Mann championed?",
        options: [
          "To educate formerly enslaved people in the North",
          "To provide college education to women",
          "To teach immigrants English",
          "To train professional teachers",
        ],
        answer: 3, // D
      },
    ],
    sources: [
      "Cremin, Lawrence A. <em>The Republic and the School: Horace Mann on the Education of Free Men.</em> Teachers College Press, 1957.",
      "Mann, Horace. <em>Twelfth Annual Report of the Secretary of the Board of Education.</em> Massachusetts Board of Education, 1848.",
    ],
  },
  {
    id: "dix",
    num: "03",
    color: "#9B7EC8",
    era: "1841 to 1860",
    title: "Dorothea Dix and Mental Health Reform",
    subtitle: "A Lone Voice That Changed a Nation's Conscience",
    slides: [
      {
        label: "Background",
      imgSrc: dixImg1,
        bullets: [
          "Mentally ill often imprisoned",
          "Treated as criminals or outcasts",
          "Institutions overcrowded and abusive",
          "Society misunderstood mental illness",
          "Reformers demanded humane treatment",
        ],
        imgAlt: "Dark prison corridor scene with mentally ill prisoners behind bars",
      },
      {
        label: "Dorothea Dix",
      imgSrc: dixImg3,
        bullets: [
          "Teacher turned social reformer",
          "Investigated prisons and institutions",
          "Documented mistreatment of mentally ill",
          "Presented reports to legislatures",
          "Advocated compassionate treatment",
        ],
        imgAlt: "Dorothea Dix holding documents while investigating abusive institutions",
      },
      {
        label: "Reform Campaign",
      imgSrc: dixImg2,
        bullets: [
          "Collected evidence from institutions",
          "Spoke before state legislatures",
          "Demanded proper treatment facilities",
          "Advocated specialized mental hospitals",
          "Raised national public awareness",
        ],
        imgAlt: "Cartoon scene of Dorothea Dix presenting evidence to lawmakers",
      },
      {
        label: "Results of Reform",
      imgSrc: dixImg4,
        bullets: [
          "States built mental hospitals",
          "Treatment conditions improved significantly",
          "Mentally ill separated from prisoners",
          "Mental health gained public attention",
          "Inspired later healthcare reforms",
        ],
        imgAlt: "Early mental hospital building with gardens and patients walking",
      },
      {
        label: "Historical Significance",
      imgSrc: dixImg5,
        bullets: [
          "Major humanitarian reform movement",
          "Changed views of mental illness",
          "Expanded government care responsibilities",
          "Increased compassion for vulnerable people",
          "Foundation for modern mental healthcare",
        ],
        imgAlt: "Cartoon showing transformation from prison confinement to hospital care",
      },
    ],
    assessment: [
      {
        q: "What event in 1841 directly inspired Dorothea Dix to begin her reform campaign?",
        options: [
          "She read a newspaper account of abuse in a Pennsylvania asylum.",
          "She attended a lecture by Horace Mann on social reform.",
          "She discovered mentally ill prisoners in an unheated Cambridge jail cell.",
          "She was herself hospitalized briefly for illness.",
        ],
        answer: 2, // C
      },
      {
        q: "Why was Dix's 1854 federal land grant bill ultimately unsuccessful?",
        options: [
          "The Senate voted it down on moral grounds.",
          "The Supreme Court ruled it unconstitutional.",
          "Dix withdrew the bill after public opposition.",
          "President Pierce vetoed it citing states' rights.",
        ],
        answer: 3, // D
      },
    ],
    sources: [
      "Brown, Thomas J. <em>Dorothea Dix: New England Reformer.</em> Harvard University Press, 1998.",
      "Dix, Dorothea L. <em>Memorial to the Legislature of Massachusetts.</em> Munroe and Francis, 1843.",
    ],
  },
  {
    id: "temperance",
    num: "04",
    color: "#D4706A",
    era: "1826 to 1860",
    title: "The American Temperance Union",
    subtitle: "Alcohol Reform and the Fight to Change Drinking Habits",
    slides: [
      {
        label: "Background",
        imgSrc: temperanceImg1,
        bullets: [
          "Alcohol widely consumed in early America",
          "Taverns common gathering places in towns and cities",
          "Drinking viewed as a normal daily habit",
          "Heavy drinking created serious social problems",
          "Reformers began promoting moderation and self-control",
        ],
        imgAlt: "Nineteenth-century tavern scene with men sitting and standing around a table drinking and socializing",
      },
      {
        label: "Temperance Concerns",
        imgSrc: temperanceImg2,
        bullets: [
          "Drunkenness harmed families and communities",
          "Alcohol abuse closely linked to poverty and crime",
          "Workers sometimes missed jobs because of drinking",
          "Domestic violence increased with alcohol misuse",
          "Reformers warned about moral and spiritual dangers",
        ],
        imgAlt: "Satirical nineteenth-century illustration showing a drunken man behaving irresponsibly toward his family",
      },
      {
        label: "American Temperance Union",
        imgSrc: temperanceImg3,
        bullets: [
          "Reform group promoting temperance and alcohol moderation",
          "Encouraged people to reduce or give up drinking",
          "Organized meetings and public discussions about alcohol",
          "Spread ideas about self-discipline and self-control",
          "Promoted healthier and more stable lifestyles",
        ],
        imgAlt: "Illustration of a temperance or reform meeting with speakers addressing an attentive audience",
      },
      {
        label: "Impact on Society",
        imgSrc: temperanceImg4,
        bullets: [
          "Temperance ideas spread across many parts of America",
          "Thousands of people signed pledges against drinking alcohol",
          "Churches strongly supported temperance preaching and reform",
          "Reform groups organized campaigns, rallies, and local societies",
          "Public debate about alcohol increased in newspapers and politics",
        ],
        imgAlt: "Temperance poster or satirical cartoon urging people to avoid alcohol and support reform",
      },
      {
        label: "Historical Significance",
        imgSrc: temperanceImg5,
        bullets: [
          "Temperance became a major national reform movement",
          "Influenced later prohibition campaigns and laws",
          "Showed the power of organized reform groups",
          "Encouraged personal responsibility and discipline",
          "Helped change American attitudes toward alcohol use",
        ],
        imgAlt: "Temperance rally or parade scene with banners promoting alcohol reform",
      },
    ],
    assessment: [
      {
        q: "What made the Washingtonian Movement of the 1840s distinctive within the temperance movement?",
        options: [
          "It focused exclusively on lobbying state legislatures.",
          "It advocated for moderate drinking rather than abstinence.",
          "It featured former drunkards sharing personal testimonials of recovery.",
          "It was led primarily by Protestant clergy.",
        ],
        answer: 2, // C
      },
      {
        q: "The Maine Law of 1851 was significant primarily because it",
        options: [
          "established the first federal alcohol tax.",
          "gave women the right to vote in local elections.",
          "banned the importation of foreign spirits.",
          "was the first statewide prohibition of alcohol in U.S. history.",
        ],
        answer: 3, // D
      },
    ],
    sources: [
      "Tyrrell, Ian R. <em>Sobering Up: From Temperance to Prohibition in Antebellum America, 1800-1860.</em> Greenwood Press, 1979.",
      "Blocker, Jack S. <em>American Temperance Movements: Cycles of Reform.</em> Twayne Publishers, 1989.",
    ],
  },
];

// 3D title slide embeds (Blocks.glass)
const TOPIC_3D = {
  awakening: "https://blocks.glass/embed/cc5ffd5a-cc9b-438f-8e3e-f6ac4bdb75ce",
  mann: "https://blocks.glass/embed/a702dc40-2cd1-4038-8b1e-14a6358790bb",
  dix: "https://blocks.glass/embed/3ed054bf-ebb3-4825-a895-4ad7ec0f4b39",
  temperance: "https://blocks.glass/embed/f1840bbd-b4dc-456f-bc48-a3a2437e4eaa",
};

function Preload3DModels() {
  const urls = Object.values(TOPIC_3D);
  return (
    <div style={{ position: "absolute", width: 0, height: 0, overflow: "hidden", pointerEvents: "none" }} aria-hidden="true">
      {urls.map((src, i) => (
        <iframe
          key={i}
          src={src}
          title={`preload-3d-${i}`}
          style={{ width: 0, height: 0, border: "none" }}
          sandbox="allow-scripts allow-same-origin"
        />
      ))}
    </div>
  );
}

/* =========================================================  THE WHEEL  */
function TriviaWheel() {
  const [rotation, setRotation] = useState(0);
  const [usedIds, setUsedIds] = useState([]);
  const [currentQ, setCurrentQ] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [teamScores, setTeamScores] = useState({
    A: 0,
    B: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
  });
  const [round, setRound] = useState(1);
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0); // index into order array
  const [spinning, setSpinning] = useState(false);
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showHeaderHowToPlay, setShowHeaderHowToPlay] = useState(false);
  const teamsInOrder = ["A", "B", "D", "E", "F", "G"];

  // Wheel spin timing: slower start, spin longer, longer slowdown
  const WHEEL_SPIN_DURATION_MS = 4200;
  const WHEEL_SPIN_CSS_DURATION = "4.2s";
  const WHEEL_EASING = "cubic-bezier(0.22, 0.9, 0.2, 1)";

  const getTeammateLabel = (teamKey, roundNum) => {
    const r = Math.max(1, roundNum || 1);
    if (teamKey === "G") {
      const idx = ((r - 1) % 4) + 1; // G1–G4
      return `${teamKey}${idx}`;
    }
    const idx = ((r - 1) % 3) + 1; // A1–A3, etc., then wrap
    return `${teamKey}${idx}`;
  };

  // 16 visual segments on the wheel: 4 of each key color in a repeating pattern
  const WHEEL_SEGMENTS = 16;
  const segmentAngle = 360 / WHEEL_SEGMENTS;
  const patternColors = [
    TOPIC_COLOR_BY_ID.awakening,
    TOPIC_COLOR_BY_ID.mann,
    TOPIC_COLOR_BY_ID.dix,
    TOPIC_COLOR_BY_ID.temperance,
    TOPIC_COLOR_BY_ID.awakening,
    TOPIC_COLOR_BY_ID.mann,
    TOPIC_COLOR_BY_ID.dix,
    TOPIC_COLOR_BY_ID.temperance,
    TOPIC_COLOR_BY_ID.awakening,
    TOPIC_COLOR_BY_ID.mann,
    TOPIC_COLOR_BY_ID.dix,
    TOPIC_COLOR_BY_ID.temperance,
    TOPIC_COLOR_BY_ID.awakening,
    TOPIC_COLOR_BY_ID.mann,
    TOPIC_COLOR_BY_ID.dix,
    TOPIC_COLOR_BY_ID.temperance,
  ];

  // map each topic color to its topic id
  const topicIdByColor = Object.entries(TOPIC_COLOR_BY_ID).reduce((acc, [topicId, color]) => {
    acc[color] = topicId;
    return acc;
  }, {});

  // precompute which wheel segment indices belong to which topic
  const segmentsForTopicId = patternColors.reduce((acc, color, index) => {
    const topicId = topicIdByColor[color];
    if (!topicId) return acc;
    if (!acc[topicId]) acc[topicId] = [];
    acc[topicId].push(index);
    return acc;
  }, {});

  // wheel gradient: 4 slices of each key color around the circle
  const conicStops = Array.from({ length: WHEEL_SEGMENTS })
    .map((_, i) => {
      const start = i * segmentAngle;
      const end = (i + 1) * segmentAngle;
      const col = patternColors[i % patternColors.length] || C.accent;
      return `${col} ${start}deg ${end}deg`;
    })
    .join(", ");

  // only allow each question to appear once per session
  const availableQuestions = TRIVIA_QUESTIONS.filter((q) => !usedIds.includes(q.id));

  const activeTeamKey = teamsInOrder[currentTeamIndex];
  const activeTeammateLabel = getTeammateLabel(activeTeamKey, round);

  const spinWheel = () => {
    if (spinning) return;
    if (availableQuestions.length === 0) return;
    setSpinning(true);
    setSelectedOption(null);
    setHasAnswered(false);

    const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];

    // figure out which wheel segments correspond to this question's topic
    const segmentsForTopic = segmentsForTopicId[randomQuestion.topicId];

    // if something is off, fall back to a random spin
    if (!segmentsForTopic || segmentsForTopic.length === 0) {
      const fallbackExtraSpins = 3 + Math.floor(Math.random() * 3);
      const fallbackRandomOffset = Math.random() * 360;
      const fallbackRotation = rotation + fallbackExtraSpins * 360 + fallbackRandomOffset;
      setRotation(fallbackRotation);

      setTimeout(() => {
        setCurrentQ(randomQuestion);
        if (!usedIds.includes(randomQuestion.id)) {
          setUsedIds((prev) => [...prev, randomQuestion.id]);
        }
        setSpinning(false);
      }, WHEEL_SPIN_DURATION_MS);
      return;
    }

    // choose one of that topic's segments at random
    const segmentIndex =
      segmentsForTopic[Math.floor(Math.random() * segmentsForTopic.length)];

    // center angle of that segment within the conic gradient
    const targetAngle = segmentAngle * segmentIndex + segmentAngle / 2;

    // the pointer is visually at the top of the wheel; in a conic-gradient
    // 0deg is at the right, 90deg bottom, 180deg left, 270deg top.
    const POINTER_ANGLE = 270;

    // we want the wheel's final rotation so that the segment's center ends up under the pointer
    const targetRotationMod = (POINTER_ANGLE - targetAngle + 360) % 360;
    const currentRotationMod = ((rotation % 360) + 360) % 360;

    // minimal forward delta to land exactly on the desired segment
    const baseDelta = (targetRotationMod - currentRotationMod + 360) % 360;

    // add several full spins for a satisfying animation (longer spin)
    const extraSpins = 5 + Math.floor(Math.random() * 3); // 5–7 full spins
    const newRotation = rotation + extraSpins * 360 + baseDelta;
    setRotation(newRotation);

    setTimeout(() => {
      setCurrentQ(randomQuestion);
      if (!usedIds.includes(randomQuestion.id)) {
        setUsedIds((prev) => [...prev, randomQuestion.id]);
      }
      setSpinning(false);
    }, WHEEL_SPIN_DURATION_MS);
  };

  const handleAnswer = (index) => {
    if (!currentQ) return;
    if (hasAnswered) return;
    setSelectedOption(index);
    setHasAnswered(true);

    const correct = index === currentQ.answer;
    if (correct) {
      setTeamScores((prev) => ({
        ...prev,
        [activeTeamKey]: prev[activeTeamKey] + 1,
      }));
    }
  };

  const advanceTurn = () => {
    // advance team/round: A → B → D → E → F → G → back to A and increment round
    setCurrentTeamIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % teamsInOrder.length;
      if (nextIndex === 0) {
        setRound((r) => r + 1);
      }
      return nextIndex;
    });

    setCurrentQ(null);
    setSelectedOption(null);
    setHasAnswered(false);
  };

  const resetGame = () => {
    setUsedIds([]);
    setCurrentQ(null);
    setSelectedOption(null);
    setHasAnswered(false);
    setTeamScores({ A: 0, B: 0, D: 0, E: 0, F: 0, G: 0 });
    setRound(1);
    setCurrentTeamIndex(0);
  };

  return (
    <section
      id="wheel"
      style={{
        background: C.bg,
        padding: "4.5rem 1.5rem 5rem",
        borderTop: `1px solid ${C.border}`,
      }}
    >
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div
              style={{
                fontFamily: "monospace",
                fontSize: 9,
                letterSpacing: ".22em",
                color: C.accentLo,
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Fun Activity
            </div>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.5rem, 3vw, 2.3rem)",
                color: C.hi,
                fontWeight: 900,
                marginBottom: 10,
              }}
            >
              Team Questions
            </h2>
            <div style={{ marginTop: "1rem" }}>
              <button
                type="button"
                onClick={() => setShowHeaderHowToPlay((v) => !v)}
                style={{
                  borderRadius: 999,
                  border: `1px solid ${C.border}`,
                  padding: "6px 14px",
                  background: showHeaderHowToPlay ? C.surface : "transparent",
                  color: C.muted,
                  fontFamily: "monospace",
                  fontSize: 9,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                How to Play {showHeaderHowToPlay ? "−" : "+"}
              </button>
              {showHeaderHowToPlay && (
                <p
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: ".98rem",
                    color: C.muted,
                    maxWidth: 720,
                    margin: "0.75rem auto 0",
                    lineHeight: 1.7,
                  }}
                >
                  Press the button to “spin the wheel” and draw a random question in the panel on the right. The team whose turn it is answers the question; if they are correct, their team automatically earns 1 point. We go in order A → B → D → E → F → G, and each full cycle increases the round number (A1 for Round 1, A2 for Round 2, A3 for Round 3, etc.).
                </p>
              )}
            </div>
            <div
              style={{
                marginTop: "1.2rem",
                padding: "0.65rem 0.9rem",
                borderRadius: 999,
                border: `1px solid ${C.border}`,
                background: C.surface,
                display: "flex",
                flexDirection: "column",
                gap: 6,
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: 9,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: C.muted,
                }}
              >
                Turn Order &amp; Current Teammate
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 6,
                }}
              >
                {teamsInOrder.map((t) => {
                  const isActive = t === activeTeamKey;
                  return (
                    <div
                      key={t}
                      style={{
                        padding: "4px 9px",
                        borderRadius: 999,
                        border: `1px solid ${isActive ? C.accent : C.border}`,
                        background: isActive ? `${C.accent}22` : "transparent",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontFamily: "monospace",
                        fontSize: 11,
                        color: isActive ? C.accent : C.muted,
                      }}
                    >
                      <span>Team {t}</span>
                      <span
                        style={{
                          padding: "2px 6px",
                          borderRadius: 6,
                          background: C.card,
                          border: `1px solid ${C.border}`,
                          color: C.hi,
                          fontSize: 11,
                        }}
                      >
                        {getTeammateLabel(t, round)}
                      </span>
                      <span
                        style={{
                          padding: "2px 6px",
                          borderRadius: 6,
                          background: C.card,
                          border: `1px solid ${C.border}`,
                          color: C.hi,
                          fontSize: 11,
                          minWidth: 18,
                          textAlign: "center",
                        }}
                      >
                        {teamScores[t]}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: 10,
                  color: C.muted,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                }}
              >
                Now answering: Team {activeTeamKey} — {activeTeammateLabel}
              </div>
            </div>
          </div>
        </Reveal>

        {/* layout: wheel + sidebar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)",
            gap: "2.2rem",
            alignItems: "stretch",
          }}
        >
          {/* Wheel + summary */}
          <Reveal>
            <div
              style={{
                borderRadius: 18,
                border: `1px solid ${C.border}`,
                background: C.surface,
                padding: "1.8rem 1.9rem 2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.2rem",
              }}
            >
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: 10,
                  letterSpacing: ".16em",
                  color: C.muted,
                  textTransform: "uppercase",
                  marginBottom: ".4rem",
                }}
              >
                Tap the wheel to spin
              </div>

              <div
                style={{
                  position: "relative",
                  width: "min(320px, 70vw)",
                  aspectRatio: "1 / 1",
                }}
              >
                {/* pointer */}
                <div
                  style={{
                    position: "absolute",
                    top: "-10px",
                    left: "50%",
                    transform: "translateX(-50%) rotate(180deg)",
                    width: 0,
                    height: 0,
                    borderLeft: "10px solid transparent",
                    borderRight: "10px solid transparent",
                    borderBottom: `16px solid ${C.hi}`,
                    zIndex: 3,
                  }}
                />

                {/* wheel disc */}
                <button
                  onClick={spinWheel}
                  disabled={spinning}
                  style={{
                    position: "absolute",
                    inset: 0,
                    margin: "auto",
                    borderRadius: "50%",
                    border: `2px solid ${C.border}`,
                    backgroundImage: `conic-gradient(${conicStops})`,
                    cursor: spinning ? "default" : "pointer",
                    transition: `transform ${WHEEL_SPIN_CSS_DURATION} ${WHEEL_EASING}`,
                    transform: `rotate(${rotation}deg)`,
                    boxShadow: "0 20px 50px rgba(0,0,0,0.7)",
                  }}
                >
                  {/* center label */}
                  <div
                    style={{
                      position: "absolute",
                      inset: "22%",
                      borderRadius: "50%",
                      background: C.card,
                      border: `1px solid ${C.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      gap: 4,
                      padding: "0.4rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: 10,
                        letterSpacing: ".14em",
                        color: C.muted,
                        textTransform: "uppercase",
                      }}
                    >
                      Spin
                    </span>
                    <span
                      style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "1.1rem",
                        color: C.hi,
                        fontWeight: 700,
                      }}
                    >
                      The Wheel
                    </span>
                  </div>
                </button>
              </div>

              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: 10,
                  color: C.muted,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                {usedIds.length} / {TRIVIA_QUESTIONS.length} questions used this session
              </div>

              <button
                onClick={resetGame}
                style={{
                  marginTop: ".6rem",
                  padding: "6px 14px",
                  borderRadius: 999,
                  border: `1px solid ${C.border}`,
                  background: "transparent",
                  color: C.muted,
                  fontFamily: "monospace",
                  fontSize: 10,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                Reset scores & questions
              </button>
            </div>
          </Reveal>

          {/* Sidebar: directions, color key, scoreboard */}
          <Reveal delay={0.08}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {/* Current question panel */}
              <div
                style={{
                  borderRadius: 14,
                  border: `1px solid ${C.border}`,
                  background: C.surface,
                  padding: "1.4rem 1.5rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: 9,
                    letterSpacing: ".18em",
                    textTransform: "uppercase",
                    color: C.muted,
                  }}
                >
                    {currentQ ? "Current Question" : "Waiting for a Question"}
                </div>
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: 10,
                    color: C.muted,
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    marginBottom: ".7rem",
                  }}
                >
                  Round {round} — Team {activeTeamKey}&apos;s turn ({activeTeammateLabel})
                </div>
                {currentQ ? (
                  <>
                    <div
                      style={{
                        fontFamily: "monospace",
                        fontSize: 9,
                        letterSpacing: ".18em",
                        textTransform: "uppercase",
                        color: TOPIC_COLOR_BY_ID[currentQ.topicId] || C.accent,
                        marginBottom: ".45rem",
                      }}
                    >
                      The Wheel —{" "}
                      {currentQ.topicId === "awakening" && "Second Great Awakening"}
                      {currentQ.topicId === "mann" && "Horace Mann & Education"}
                      {currentQ.topicId === "dix" && "Dorothea Dix & Mental Health"}
                      {currentQ.topicId === "temperance" && "Temperance Movement"}
                    </div>
                    <h3
                      style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "1rem",
                        color: C.hi,
                        marginBottom: ".6rem",
                      }}
                    >
                      Question {currentQ.id}
                    </h3>
                    <p
                      style={{
                        fontFamily: "Georgia, serif",
                        fontSize: ".95rem",
                        color: C.text,
                        lineHeight: 1.7,
                        marginBottom: ".6rem",
                      }}
                    >
                      {currentQ.prompt}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: ".35rem",
                        marginBottom: ".7rem",
                      }}
                    >
                      {currentQ.options.map((opt, idx) => {
                        const isSel = selectedOption === idx;
                        const isCorrect = hasAnswered && idx === currentQ.answer;
                        const isWrong = hasAnswered && isSel && idx !== currentQ.answer;
                        const letter = String.fromCharCode(65 + idx);
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleAnswer(idx)}
                            style={{
                              textAlign: "left",
                              padding: "7px 10px",
                              borderRadius: 8,
                              border: "none",
                              background: isCorrect
                                ? "#4CAF5020"
                                : isWrong
                                ? "#E5393520"
                                : isSel
                                ? `${TOPIC_COLOR_BY_ID[currentQ.topicId] || C.accent}22`
                                : C.card,
                              color: isCorrect
                                ? "#81C784"
                                : isWrong
                                ? "#EF9A9A"
                                : C.text,
                              fontFamily: "Georgia, serif",
                              fontSize: ".9rem",
                              cursor: "pointer",
                              transition: "all .18s",
                            }}
                            disabled={hasAnswered && isCorrect}
                          >
                            <span
                              style={{
                                fontFamily: "monospace",
                                fontSize: 10,
                                opacity: 0.8,
                                marginRight: 6,
                              }}
                            >
                              {letter}.
                            </span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                    <p
                      style={{
                        fontFamily: "Georgia, serif",
                        fontSize: ".88rem",
                        color: hasAnswered
                          ? selectedOption === currentQ.answer
                            ? "#81C784"
                            : "#EF9A9A"
                          : C.muted,
                        marginBottom: ".6rem",
                      }}
                    >
                      {hasAnswered
                        ? selectedOption === currentQ.answer
                          ? `Correct! +1 point for Team ${activeTeamKey}.`
                          : "That’s not correct. No point for this question."
                        : ""}
                    </p>
                    <button
                      type="button"
                      onClick={advanceTurn}
                      disabled={!hasAnswered}
                      style={{
                        padding: "6px 12px",
                        borderRadius: 999,
                        border: `1px solid ${
                          hasAnswered ? C.border : `${C.border}80`
                        }`,
                        background: hasAnswered ? C.card : "transparent",
                        color: hasAnswered ? C.hi : C.muted,
                        fontFamily: "monospace",
                        fontSize: 10,
                        letterSpacing: ".14em",
                        textTransform: "uppercase",
                        cursor: hasAnswered ? "pointer" : "default",
                      }}
                    >
                      Next Team
                    </button>
                  </>
                ) : (
                  <p
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: ".9rem",
                      color: C.text,
                      lineHeight: 1.7,
                    }}
                  >
                    Press <span style={{ fontWeight: 600 }}>Spin The Wheel</span> to draw a question for
                    Team {activeTeamKey} — {activeTeammateLabel}. The question will appear here.
                  </p>
                )}
              </div>

              {/* Color key */}
              <div
                style={{
                  borderRadius: 14,
                  border: `1px solid ${C.border}`,
                  background: C.surface,
                  padding: "1.3rem 1.5rem 1.2rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: 9,
                    letterSpacing: ".18em",
                    textTransform: "uppercase",
                    color: C.muted,
                    marginBottom: ".6rem",
                  }}
                >
                  Color Key (Matches Slide Decks)
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem 1rem",
                    fontFamily: "Georgia, serif",
                    fontSize: ".9rem",
                    color: C.text,
                  }}
                >
                  {[
                    { id: "awakening", label: "Second Great Awakening" },
                    { id: "mann", label: "Horace Mann & Public Education" },
                    { id: "dix", label: "Dorothea Dix & Mental Health" },
                    { id: "temperance", label: "American Temperance Union" },
                  ].map((t) => (
                    <div
                      key={t.id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <span
                        style={{
                          width: 14,
                          height: 14,
                          borderRadius: 4,
                          background: TOPIC_COLOR_BY_ID[t.id],
                          border: `1px solid ${C.border}`,
                          flexShrink: 0,
                        }}
                      />
                      <span>{t.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* How to Play popup */}
        {showHowToPlay && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.75)",
              zIndex: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem",
            }}
            aria-modal="true"
            role="dialog"
          >
            <div
              style={{
                maxWidth: 720,
                width: "100%",
                background: C.surface,
                borderRadius: 18,
                border: `1px solid ${C.border}`,
                boxShadow: "0 22px 60px rgba(0,0,0,0.9)",
                padding: "1.8rem 1.9rem 1.7rem",
                position: "relative",
              }}
            >
              <button
                type="button"
                onClick={() => setShowHowToPlay(false)}
                style={{
                  position: "absolute",
                  top: 10,
                  right: 12,
                  border: "none",
                  background: "transparent",
                  color: C.muted,
                  cursor: "pointer",
                  fontSize: 18,
                  lineHeight: 1,
                }}
                aria-label="Close How to Play"
              >
                ×
              </button>

              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: 9,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: C.muted,
                  marginBottom: ".6rem",
                }}
              >
                How to Play — The Wheel
              </div>
              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1.2rem",
                  color: C.hi,
                  marginBottom: ".6rem",
                }}
              >
                Turn Order, Rounds, and Teammates
              </h3>
              <ol
                style={{
                  margin: 0,
                  paddingLeft: "1.2rem",
                  fontFamily: "Georgia, serif",
                  fontSize: ".95rem",
                  color: C.text,
                  lineHeight: 1.7,
                }}
              >
                <li>Teams sit in order A, B, D, E, F, G (Team C presents the game).</li>
                <li>
                  The current team presses <strong>Spin The Wheel</strong>. A random question appears in the
                  panel next to the wheel.
                </li>
                <li>
                  The highlighted team (and teammate label like A1, B2, etc.) answers together. Selecting an
                  answer automatically awards <strong>1 point</strong> to that team if the answer is correct.
                </li>
                <li>
                  After each question, click <strong>Next Team</strong> to move to the next team in order.
                  When you return to Team A, the round number increases (A1, A2, A3, A1 on the 4th round).
                </li>
                <li>
                  Teams A, B, D, E, and F have three teammates each (1–3), so they loop back to teammate 1 on
                  the 4th round. Team G uses four teammates (G1–G4).
                </li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

const TIMELINE_EVENTS = [
  { year: "1801", label: "Cane Ridge Revival",          color: "#C8A96A", topic: "awakening" },
  { year: "1820", label: "2nd Great Awakening peaks",   color: "#C8A96A", topic: "awakening" },
  { year: "1826", label: "Temperance Society founded",  color: "#D4706A", topic: "temperance" },
  { year: "1837", label: "Mann: Sec. of Education",     color: "#7DB5A0", topic: "mann" },
  { year: "1841", label: "Dix at East Cambridge Jail",  color: "#9B7EC8", topic: "dix" },
  { year: "1843", label: "Dix's Memorial presented",    color: "#9B7EC8", topic: "dix" },
  { year: "1848", label: "Mann's 12th Annual Report",   color: "#7DB5A0", topic: "mann" },
  { year: "1851", label: "Maine Law passes",            color: "#D4706A", topic: "temperance" },
  { year: "1854", label: "Pierce vetoes asylum bill",   color: "#9B7EC8", topic: "dix" },
];

// Trivia questions for "The Wheel" activity
const TOPIC_COLOR_BY_ID = TOPICS.reduce((acc, t) => {
  acc[t.id] = t.color;
  return acc;
}, {});

const TRIVIA_QUESTIONS = [
  // Section 1 — Second Great Awakening (awakening)
  {
    id: 1,
    topicId: "awakening",
    shortLabel: "Awakening 1",
    prompt: "Which statement best describes the Second Great Awakening?",
    options: [
      "A political revolution against British rule",
      "A religious revival movement that spread across the United States",
      "A movement to industrialize northern cities",
      "A military campaign during the War of 1812",
    ],
    answer: 1,
  },
  {
    id: 2,
    topicId: "awakening",
    shortLabel: "Awakening 2",
    prompt: "What was a central belief of the Second Great Awakening?",
    options: [
      "Salvation was predetermined for only a few people",
      "Only clergy could interpret the Bible",
      "Individuals could choose salvation through personal faith",
      "Religion should stay out of society",
    ],
    answer: 2,
  },
  {
    id: 3,
    topicId: "awakening",
    shortLabel: "Awakening 3",
    prompt: "Where did many revival meetings during the Second Great Awakening occur?",
    options: ["Outdoor camp meetings", "Government buildings", "Universities", "Military camps"],
    answer: 0,
  },
  {
    id: 4,
    topicId: "awakening",
    shortLabel: "Awakening 4",
    prompt: "Which groups experienced rapid growth during the Second Great Awakening?",
    options: ["Catholic monasteries", "Anglican churches", "Jewish congregations", "Methodist and Baptist churches"],
    answer: 3,
  },
  {
    id: 5,
    topicId: "awakening",
    shortLabel: "Awakening 5",
    prompt: "What effect did the Second Great Awakening have on reform movements?",
    options: [
      "It discouraged social activism",
      "It inspired movements to improve society",
      "It eliminated religious influence in politics",
      "It prevented new religious groups from forming",
    ],
    answer: 1,
  },
  {
    id: 6,
    topicId: "awakening",
    shortLabel: "Awakening 6",
    prompt: "The Cane Ridge Revival of 1801 is significant because it",
    options: [
      "created the first American church law",
      "ended the Second Great Awakening",
      "was one of the largest revival meetings in U.S. history",
      "established the Methodist Church",
    ],
    answer: 2,
  },
  // Section 2 — Horace Mann and Public Education (mann)
  {
    id: 7,
    topicId: "mann",
    shortLabel: "Mann 1",
    prompt: "Horace Mann is best known for promoting",
    options: [
      "the American common school system",
      "religious education in churches",
      "private schooling for wealthy families",
      "military training in schools",
    ],
    answer: 0,
  },
  {
    id: 8,
    topicId: "mann",
    shortLabel: "Mann 2",
    prompt: "What position did Horace Mann hold that allowed him to influence education reform?",
    options: [
      "U.S. Secretary of Education",
      "Secretary of the Massachusetts Board of Education",
      "Governor of Massachusetts",
      "President of Harvard University",
    ],
    answer: 1,
  },
  {
    id: 9,
    topicId: "mann",
    shortLabel: "Mann 3",
    prompt: "What was the purpose of the “common school”?",
    options: [
      "To train soldiers",
      "To prepare students only for college",
      "To educate children from all social classes",
      "To replace church education",
    ],
    answer: 2,
  },
  {
    id: 10,
    topicId: "mann",
    shortLabel: "Mann 4",
    prompt: "Horace Mann believed education was important because it",
    options: [
      "increased church attendance",
      "reduced immigration",
      "helped strengthen democracy",
      "increased factory production",
    ],
    answer: 2,
  },
  {
    id: 11,
    topicId: "mann",
    shortLabel: "Mann 5",
    prompt: "What were “normal schools”?",
    options: [
      "Schools for average students",
      "Schools designed to train teachers",
      "Religious schools for clergy",
      "Schools that taught industrial skills",
    ],
    answer: 1,
  },
  {
    id: 12,
    topicId: "mann",
    shortLabel: "Mann 6",
    prompt: "One result of Mann’s reforms was",
    options: [
      "increased literacy rates",
      "the elimination of public schools",
      "the end of private education",
      "fewer trained teachers",
    ],
    answer: 0,
  },
  // Section 3 — Dorothea Dix and Mental Health Reform (dix)
  {
    id: 13,
    topicId: "dix",
    shortLabel: "Dix 1",
    prompt: "Dorothea Dix became a reformer after discovering that",
    options: [
      "schools were poorly funded",
      "hospitals refused to treat immigrants",
      "mentally ill people were kept in prisons",
      "children worked in factories",
    ],
    answer: 2,
  },
  {
    id: 14,
    topicId: "dix",
    shortLabel: "Dix 2",
    prompt: "What profession did Dorothea Dix originally hold?",
    options: ["Lawyer", "Teacher", "Doctor", "Journalist"],
    answer: 1,
  },
  {
    id: 15,
    topicId: "dix",
    shortLabel: "Dix 3",
    prompt: "Dix gathered evidence of poor treatment by",
    options: [
      "interviewing doctors only",
      "reading newspaper articles",
      "visiting prisons and institutions",
      "attending government meetings",
    ],
    answer: 2,
  },
  {
    id: 16,
    topicId: "dix",
    shortLabel: "Dix 4",
    prompt: "Dix presented her findings to",
    options: [
      "foreign governments",
      "church leaders only",
      "private companies",
      "state legislatures",
    ],
    answer: 3,
  },
  {
    id: 17,
    topicId: "dix",
    shortLabel: "Dix 5",
    prompt: "One result of Dix’s work was",
    options: [
      "the closure of all prisons",
      "the creation of mental hospitals",
      "the elimination of hospitals",
      "the end of mental illness treatment",
    ],
    answer: 1,
  },
  {
    id: 18,
    topicId: "dix",
    shortLabel: "Dix 6",
    prompt: "Dorothea Dix’s reform movement focused mainly on",
    options: [
      "economic policy",
      "humanitarian treatment of the mentally ill",
      "industrial reform",
      "immigration laws",
    ],
    answer: 1,
  },
  // Section 4 — American Temperance Union (temperance)
  {
    id: 19,
    topicId: "temperance",
    shortLabel: "Temperance 1",
    prompt: "The temperance movement focused primarily on reducing",
    options: ["alcohol consumption", "poverty", "immigration", "factory labor"],
    answer: 0,
  },
  {
    id: 20,
    topicId: "temperance",
    shortLabel: "Temperance 2",
    prompt: "Why did reformers oppose heavy drinking?",
    options: [
      "It increased church attendance",
      "It improved worker productivity",
      "It caused social and family problems",
      "It helped expand cities",
    ],
    answer: 2,
  },
  {
    id: 21,
    topicId: "temperance",
    shortLabel: "Temperance 3",
    prompt: "The American Temperance Union encouraged people to",
    options: [
      "open more taverns",
      "reduce church influence",
      "pledge to stop drinking alcohol",
      "drink only imported alcohol",
    ],
    answer: 2,
  },
  {
    id: 22,
    topicId: "temperance",
    shortLabel: "Temperance 4",
    prompt: "What method did temperance reformers often use to spread their message?",
    options: ["Military campaigns", "Court trials", "Public meetings and pledges", "Trade agreements"],
    answer: 2,
  },
  {
    id: 23,
    topicId: "temperance",
    shortLabel: "Temperance 5",
    prompt: "Which law reflected the influence of the temperance movement?",
    options: [
      "Fugitive Slave Act",
      "Missouri Compromise",
      "Kansas-Nebraska Act",
      "Maine Law of 1851",
    ],
    answer: 3,
  },
  {
    id: 24,
    topicId: "temperance",
    shortLabel: "Temperance 6",
    prompt: "The Washingtonian Movement was notable because it",
    options: [
      "banned all taverns nationwide",
      "supported alcohol manufacturing",
      "was led by federal officials",
      "used personal stories from recovering drinkers",
    ],
    answer: 3,
  },
];

/* =========================================================  HOOKS  */
function useWinSize() {
  const [s, setS] = useState({
    w: typeof window !== "undefined" ? window.innerWidth : 1200,
    h: typeof window !== "undefined" ? window.innerHeight : 800,
  });
  useEffect(() => {
    const fn = () => setS({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return s;
}

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const fn = () => setY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return y;
}

function useScrollPct() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const fn = () => {
      const d = document.documentElement;
      setP(d.scrollTop / Math.max(1, d.scrollHeight - d.clientHeight));
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return p;
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const o = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive(id); },
        { threshold: 0.15 }
      );
      o.observe(el);
      return o;
    });
    return () => obs.forEach((o) => o && o.disconnect());
  }, []);
  return active;
}

function useReveal() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.08 }
    );
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return [ref, vis];
}

/* =========================================================  MICRO COMPONENTS  */
function Reveal({ children, delay = 0 }) {
  const [ref, vis] = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(22px)",
        transition: `opacity .7s ease ${delay}s, transform .7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function ProgressBar({ p }) {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 2, zIndex: 500 }}>
      <div
        style={{
          height: "100%",
          width: `${p * 100}%`,
          background: `linear-gradient(90deg, ${C.accentLo}, ${C.accent})`,
          transition: "width .08s linear",
        }}
      />
    </div>
  );
}

/* image placeholder */
function ImgPlaceholder({ alt, color, aspectRatio = "4/3" }) {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio,
        background: `${color}10`,
        border: `1px dashed ${color}40`,
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        padding: "1rem",
        boxSizing: "border-box",
      }}
    >
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.2" opacity="0.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span style={{ fontFamily: "monospace", fontSize: 10, color: `${color}70`, textAlign: "center", letterSpacing: ".05em", lineHeight: 1.4 }}>
        {alt}
      </span>
    </div>
  );
}

/* =========================================================  NAV  */
function Nav({ active }) {
  const [open, setOpen] = useState(false);
  const scrollY = useScrollY();
  const scrolled = scrollY > 40;

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const navItems = [
    { id: "hero",    label: "Home" },
    { id: "context", label: "Context" },
    ...TOPICS.map((t) => ({ id: t.id, label: t.num, color: t.color })),
    { id: "eq",      label: "EQ" },
    { id: "wheel",   label: "The Wheel" },
    { id: "bib",      label: "Bibliography" },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: scrolled ? 10 : 0,
          left: scrolled ? "50%" : 0,
          right: scrolled ? "auto" : 0,
          transform: scrolled ? "translateX(-50%)" : "none",
          width: scrolled ? "min(780px, 92vw)" : "100%",
          zIndex: 400,
          height: NAV_H,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1.2rem",
          background: scrolled ? "rgba(9,9,11,.92)" : "rgba(9,9,11,.0)",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          border: scrolled ? `1px solid ${C.border}` : "none",
          borderRadius: scrolled ? 14 : 0,
          transition: "all .4s ease",
          boxSizing: "border-box",
        }}
      >
        {/* logo */}
        <button
          onClick={() => go("hero")}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}
        >
          <div style={{ width: 28, height: 28, borderRadius: 7, background: `${C.accent}20`, border: `1px solid ${C.accent}50`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: C.accent, fontSize: 13, fontWeight: 700 }}>C</span>
          </div>
          <span style={{ fontFamily: "Georgia, serif", color: C.hi, fontSize: 13, fontWeight: 700, letterSpacing: ".06em" }}>
            Social Reform
          </span>
        </button>

        {/* desktop links */}
        <div className="nav-desktop" style={{ display: "flex", gap: 2, alignItems: "center" }}>
          {navItems.slice(1, -2).map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              style={{
                background: active === item.id ? `${item.color || C.accent}18` : "none",
                border: `1px solid ${active === item.id ? (item.color || C.accent) + "50" : "transparent"}`,
                borderRadius: 7,
                cursor: "pointer",
                fontSize: 11,
                fontFamily: "monospace",
                color: active === item.id ? (item.color || C.accent) : C.muted,
                padding: "4px 9px",
                whiteSpace: "nowrap",
                transition: "all .2s",
                letterSpacing: ".04em",
              }}
            >
              {item.label}
            </button>
          ))}
          <div style={{ width: 1, height: 16, background: C.border, margin: "0 4px" }} />
          <button onClick={() => go("wheel")} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 11, fontFamily: "monospace", color: active === "wheel" ? C.accent : C.muted, padding: "4px 9px", letterSpacing: ".04em" }}>The Wheel</button>
          <button onClick={() => go("bib")} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 11, fontFamily: "monospace", color: active === "bib" ? C.accent : C.muted, padding: "4px 9px", letterSpacing: ".04em" }}>Bibliography</button>
        </div>

        {/* hamburger */}
        <button
          className="nav-burger"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: `1px solid ${C.border}`, borderRadius: 8, cursor: "pointer", padding: "6px 8px", display: "none", flexDirection: "column", gap: 4 }}
          aria-label="menu"
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: 18,
                height: 1.5,
                background: C.muted,
                borderRadius: 1,
                transition: "all .25s",
                transform: open && i === 0 ? "rotate(45deg) translateY(5px)" : open && i === 2 ? "rotate(-45deg) translateY(-5px)" : "none",
                opacity: open && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* mobile dropdown */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: NAV_H + (scrollY > 40 ? 18 : 0),
            left: 0,
            right: 0,
            zIndex: 399,
            background: "rgba(9,9,11,.97)",
            backdropFilter: "blur(18px)",
            borderBottom: `1px solid ${C.border}`,
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              style={{
                background: active === item.id ? `${item.color || C.accent}18` : "none",
                border: `1px solid ${active === item.id ? (item.color || C.accent) + "40" : "transparent"}`,
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 13,
                fontFamily: "monospace",
                color: active === item.id ? (item.color || C.accent) : C.text,
                padding: "10px 14px",
                textAlign: "left",
                letterSpacing: ".04em",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

/* =========================================================  DOTS  */
function Dots({ active }) {
  const ids = ["hero", "context", ...TOPICS.map((t) => t.id), "eq", "wheel", "bib"];
  return (
    <div style={{ position: "fixed", right: 14, top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: 8, zIndex: 300 }}>
      {ids.map((id) => {
        const topic = TOPICS.find((t) => t.id === id);
        const col = topic ? topic.color : C.accent;
        return (
          <button
            key={id}
            title={id}
            onClick={() => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
            style={{
              width: active === id ? 8 : 4,
              height: active === id ? 8 : 4,
              borderRadius: "50%",
              background: active === id ? col : C.border,
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all .3s",
            }}
          />
        );
      })}
    </div>
  );
}

/* =========================================================  HERO  */
function Hero({ scrollY }) {
  const parallax = scrollY * 0.38;

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: C.bg,
        padding: `${NAV_H + 40}px 1.5rem 5rem`,
        boxSizing: "border-box",
      }}
    >
      {/* noise grain overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          pointerEvents: "none",
          opacity: 0.6,
        }}
      />

      {/* animated grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(${C.accent}09 1px, transparent 1px), linear-gradient(90deg, ${C.accent}09 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          transform: `translateY(${parallax * 0.2}px)`,
          pointerEvents: "none",
        }}
      />

      {/* radial glow */}
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "50%",
          transform: `translate(-50%, -50%) translateY(${parallax * 0.35}px)`,
          width: "min(900px, 120vw)",
          height: "min(900px, 120vw)",
          background: `radial-gradient(ellipse, ${C.accentLo}22 0%, transparent 65%)`,
          pointerEvents: "none",
        }}
      />

      {/* year stamp */}
      <div
        style={{
          position: "absolute",
          right: "5vw",
          bottom: "8vh",
          fontFamily: "Georgia, serif",
          fontSize: "clamp(5rem, 14vw, 12rem)",
          color: `${C.accent}07`,
          fontWeight: 900,
          lineHeight: 1,
          userSelect: "none",
          transform: `translateY(${-parallax * 0.12}px)`,
          pointerEvents: "none",
        }}
      >
        1815
      </div>

      <div style={{ position: "relative", textAlign: "center", maxWidth: 760, width: "100%", transform: `translateY(${-parallax * 0.1}px)` }}>

        <Reveal>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: `${C.accent}12`,
              border: `1px solid ${C.accent}35`,
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: "1.8rem",
            }}
          >
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: C.accent, animation: "pulse 2s infinite" }} />
            <span style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: ".2em", color: C.accent, textTransform: "uppercase" }}>
              The American Movement 1815 to 1860
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2.8rem, 7vw, 6rem)",
              color: C.hi,
              fontWeight: 900,
              lineHeight: 1.0,
              marginBottom: ".6rem",
              letterSpacing: "-.01em",
            }}
          >
            Social Reform
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2.8rem, 7vw, 6rem)",
              color: C.accent,
              fontWeight: 900,
              lineHeight: 1.0,
              marginBottom: "1.8rem",
              letterSpacing: "-.01em",
            }}
          >
            in Antebellum America
          </h1>
        </Reveal>

        {/* team names */}
        <Reveal delay={0.26}>
          <div
            style={{
              display: "flex",
              gap: ".6rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            {TEAM.map((name) => (
              <span
                key={name}
                style={{
                  fontFamily: "monospace",
                  fontSize: 11,
                  color: C.muted,
                  background: `${C.accent}0A`,
                  border: `1px solid ${C.border}`,
                  borderRadius: 6,
                  padding: "4px 10px",
                  letterSpacing: ".04em",
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>

        {/* topic pills */}
        <Reveal delay={0.32}>
          <div style={{ display: "flex", gap: ".5rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            {TOPICS.map((t) => (
              <button
                key={t.id}
                onClick={() => { const el = document.getElementById(t.id); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
                style={{
                  background: `${t.color}12`,
                  border: `1px solid ${t.color}40`,
                  borderRadius: 8,
                  padding: "7px 16px",
                  color: t.color,
                  fontSize: 11,
                  fontFamily: "monospace",
                  letterSpacing: ".05em",
                  cursor: "pointer",
                  transition: "all .2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = `${t.color}22`; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = `${t.color}12`; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {t.num} {t.title}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.44}>
          <div style={{ color: C.muted, fontSize: 11, fontFamily: "monospace", letterSpacing: ".12em", animation: "bounce 2.2s infinite" }}>
            scroll to explore
          </div>
        </Reveal>
      </div>

      {/* bottom gradient fade */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: `linear-gradient(to bottom, transparent, ${C.bg})`, pointerEvents: "none" }} />
    </section>
  );
}


/* =========================================================  CONTEXT SECTION  */
function ContextSection() {
  const cards = [
    {
      id: "awakening",
      title: "Second Great Awakening",
      subtitle: "Religious revival movement",
      color: TOPICS.find((t) => t.id === "awakening")?.color || C.accent,
    },
    {
      id: "mann",
      title: "Horace Mann",
      subtitle: "Public education reform",
      color: TOPICS.find((t) => t.id === "mann")?.color || C.accent,
    },
    {
      id: "dix",
      title: "Dorothea Dix",
      subtitle: "Mental health reform",
      color: TOPICS.find((t) => t.id === "dix")?.color || C.accent,
    },
    {
      id: "temperance",
      title: "American Temperance Union",
      subtitle: "Alcohol reform movement",
      color: TOPICS.find((t) => t.id === "temperance")?.color || C.accent,
    },
  ];

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="context"
      style={{
        background: C.surface,
        padding: "4.5rem 1.5rem 4.8rem",
        borderTop: `1px solid ${C.border}`,
      }}
    >
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <Reveal>
          <div style={{ marginBottom: "2.5rem" }}>
            <div
              style={{
                fontFamily: "monospace",
                fontSize: 9,
                letterSpacing: ".22em",
                color: C.accentLo,
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Context
            </div>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                color: C.hi,
                fontWeight: 900,
                marginBottom: 4,
              }}
            >
              The Reform Era (1815–1860)
            </h2>
            <p
              style={{
                fontFamily: "Georgia, serif",
                fontSize: ".98rem",
                color: C.muted,
                maxWidth: 640,
                lineHeight: 1.7,
              }}
            >
              Before diving into individual reformers, it helps to see the bigger
              picture of what was happening across the United States in the early
              1800s.
            </p>
          </div>
        </Reveal>

        {/* Blocks 1–3: narrative context */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1.2fr) minmax(0,1.1fr)",
            gap: "1.8rem",
            alignItems: "stretch",
            marginBottom: "2.3rem",
          }}
        >
          {/* Block 1 */}
          <Reveal>
            <div
              style={{
                borderRadius: 14,
                border: `1px solid ${C.border}`,
                background: C.card,
                padding: "1.5rem 1.6rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: 9,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    color: C.accent,
                    marginBottom: 4,
                  }}
                >
                  Block 1
                </div>
                <h3
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "1.1rem",
                    color: C.hi,
                    fontWeight: 700,
                  }}
                >
                  What Was Happening in America
                </h3>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: ".55rem",
                  fontFamily: "Georgia, serif",
                  fontSize: ".96rem",
                  color: C.text,
                  lineHeight: 1.6,
                }}
              >
                <li>Rapid population growth</li>
                <li>Expanding frontier communities</li>
                <li>New religious movements spreading</li>
                <li>Social problems becoming visible</li>
                <li>Citizens demanding social improvement</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div
              style={{
                width: "100%",
                maxWidth: 420,
                margin: "0 auto",
                aspectRatio: "4/3",
                borderRadius: 10,
                overflow: "hidden",
                border: `1px solid ${C.accent}40`,
              }}
            >
              <img
                src={contextImg1}
                alt="1800s American town scene with busy streets and growing communities"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </Reveal>
        </div>

        {/* Block 2 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1.2fr)",
            gap: "1.8rem",
            alignItems: "stretch",
            marginBottom: "2.3rem",
          }}
        >
          <Reveal>
            <div
              style={{
                width: "100%",
                maxWidth: 420,
                margin: "0 auto",
                aspectRatio: "4/3",
                borderRadius: 10,
                overflow: "hidden",
                border: `1px solid ${C.accentLo}40`,
              }}
            >
              <img
                src={contextImg2}
                alt="Religious revival meeting or church gathering in the 1800s"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div
              style={{
                borderRadius: 14,
                border: `1px solid ${C.border}`,
                background: C.card,
                padding: "1.5rem 1.6rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: 9,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    color: C.accentLo,
                    marginBottom: 4,
                  }}
                >
                  Block 2
                </div>
                <h3
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "1.1rem",
                    color: C.hi,
                    fontWeight: 700,
                  }}
                >
                  Why Reform Movements Started
                </h3>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: ".55rem",
                  fontFamily: "Georgia, serif",
                  fontSize: ".96rem",
                  color: C.text,
                  lineHeight: 1.6,
                }}
              >
                <li>Second Great Awakening spreads morality</li>
                <li>People believe society can improve</li>
                <li>Democracy encourages citizen action</li>
                <li>Reformers challenge injustice</li>
                <li>Moral duty to help others</li>
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Block 3 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1.2fr) minmax(0,1.1fr)",
            gap: "1.8rem",
            alignItems: "stretch",
            marginBottom: "2.3rem",
          }}
        >
          <Reveal>
            <div
              style={{
                borderRadius: 14,
                border: `1px solid ${C.border}`,
                background: C.card,
                padding: "1.5rem 1.6rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: 9,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    color: C.accent,
                    marginBottom: 4,
                  }}
                >
                  Block 3
                </div>
                <h3
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "1.1rem",
                    color: C.hi,
                    fontWeight: 700,
                  }}
                >
                  Types of Reform
                </h3>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: ".55rem",
                  fontFamily: "Georgia, serif",
                  fontSize: ".96rem",
                  color: C.text,
                  lineHeight: 1.6,
                }}
              >
                <li>Religious revival movements</li>
                <li>Public education reform</li>
                <li>Mental health reform</li>
                <li>Social morality movements</li>
                <li>Religious tolerance discussions</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div
              style={{
                width: "100%",
                maxWidth: 420,
                margin: "0 auto",
                aspectRatio: "4/3",
                borderRadius: 10,
                overflow: "hidden",
                border: `1px solid ${C.accent}40`,
              }}
            >
              <img
                src={contextImg3}
                alt="Split collage showing education, religion, and healthcare reform"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </Reveal>
        </div>

        {/* Block 4: cards leading into slide decks */}
        <Reveal>
          <div
            style={{
              borderRadius: 16,
              border: `1px solid ${C.border}`,
              background: `radial-gradient(circle at top left, ${C.accent}10 0, transparent 60%), ${C.card}`,
              padding: "1.6rem 1.7rem 2rem",
            }}
          >
            <div style={{ marginBottom: "1.1rem" }}>
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: 9,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: C.accentLo,
                  marginBottom: 4,
                }}
              >
                Block 4
              </div>
              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1.1rem",
                  color: C.hi,
                  fontWeight: 700,
                  marginBottom: 4,
                }}
              >
                The Four Movements You’ll Explore
              </h3>
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: ".92rem",
                  color: C.muted,
                  maxWidth: 560,
                  lineHeight: 1.6,
                }}
              >
                Each card below will expand into its own interactive slide deck
                as you scroll further down the page.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "0.9rem",
              }}
            >
              {cards.map((card, i) => (
                <button
                  key={card.id}
                  onClick={() => go(card.id)}
                  style={{
                    borderRadius: 14,
                    padding: "1.1rem 1.1rem",
                    border: `1px solid ${card.color}55`,
                    background: `${card.color}10`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 6,
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "transform .18s, box-shadow .18s, background .18s",
                    boxShadow:
                      "0 12px 26px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.02)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 18px 38px rgba(0,0,0,0.55)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 26px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.02)";
                  }}
                >
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontSize: 9,
                      letterSpacing: ".22em",
                      textTransform: "uppercase",
                      color: card.color,
                      opacity: 0.85,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: ".98rem",
                      color: C.hi,
                      fontWeight: 700,
                    }}
                  >
                    {card.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: ".88rem",
                      color: C.muted,
                    }}
                  >
                    {card.subtitle}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


/* =========================================================  SLIDE (single) -- bullet + image layout  */
function ContentSlide({ slide, color, topicTitle, slideNum, totalSlides }) {
  const isImageLeft = slideNum % 2 === 0;
  const variant = slideNum % 3;

  const baseBg = C.bg;
  const bg =
    variant === 1
      ? `radial-gradient(circle at top left, ${color}16 0, transparent 55%), ${baseBg}`
      : variant === 2
      ? `linear-gradient(135deg, ${baseBg} 0%, ${color}10 45%, ${baseBg} 100%)`
      : baseBg;

  const borderTop =
    variant === 0 ? `1px solid ${color}30` : `1px solid ${color}40`;

  const textBlock = (
    <div>
      <div style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: ".22em", color, textTransform: "uppercase", marginBottom: ".8rem" }}>
        {slide.label}
      </div>
      <h2
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(1.4rem, 3vw, 2.4rem)",
          color: C.hi,
          fontWeight: 900,
          lineHeight: 1.1,
          marginBottom: "1.4rem",
        }}
      >
        {slide.label}
      </h2>

      {/* bullets */}
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: ".65rem" }}>
        {slide.bullets.map((b, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.75rem",
              fontFamily: "Georgia, serif",
              fontSize: "clamp(.9rem, 1.3vw, 1.05rem)",
              color: C.text,
              lineHeight: 1.55,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: color,
                flexShrink: 0,
                marginTop: ".45rem",
              }}
            />
            {b}
          </li>
        ))}
      </ul>

      {/* slide counter */}
      <div style={{ marginTop: "1.5rem", fontFamily: "monospace", fontSize: 10, color: C.muted, letterSpacing: ".1em" }}>
        {String(slideNum).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
      </div>
    </div>
  );

  const imageBlock = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {slide.imgSrc ? (
        <div
          style={{
            width: "88%",
            maxWidth: 520,
            aspectRatio: "4/3",
            overflow: "hidden",
            borderRadius: 10,
            border: `1px solid ${color}40`,
            boxShadow: "0 18px 40px rgba(0,0,0,0.55)",
          }}
        >
          <img
            src={slide.imgSrc}
            alt={slide.imgAlt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      ) : (
        <ImgPlaceholder alt={slide.imgAlt} color={color} aspectRatio="4/3" />
      )}
    </div>
  );

  return (
    <div
      style={{
        width: "100vw",
        height: "100%",
        flexShrink: 0,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "3vw",
        alignItems: "center",
        padding: "3rem clamp(1.5rem, 6vw, 6rem)",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
        background: bg,
        borderTop,
      }}
    >
      {isImageLeft ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </div>
  );
}

/* =========================================================  ASSESSMENT SLIDE  */
function AssessmentSlide({ topic, slideNum, totalSlides, tx, vw }) {
  const [answers, setAnswers] = useState([null, null]);
  const [show, setShow] = useState(false);
  const si = slideNum - 1;
  const parallaxX = (tx - si * vw) * 0.05;

  return (
    <div
      style={{
        width: "100vw",
        height: "100%",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        padding: "3rem clamp(1.5rem, 5vw, 6rem)",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
        background: `${topic.color}06`,
      }}
    >
      {/* ghost ? */}
      <div
        style={{
          position: "absolute",
          right: "3vw",
          top: "50%",
          transform: `translateY(-52%) translateX(${parallaxX}px)`,
          fontFamily: "Georgia, serif",
          fontSize: "clamp(8rem, 20vw, 18rem)",
          color: `${topic.color}08`,
          fontWeight: 900,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          transition: "transform .07s linear",
        }}
      >
        ?
      </div>

      <div style={{ maxWidth: "min(820px, 100%)", width: "100%", position: "relative" }}>
        <div style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: ".22em", color: topic.color, textTransform: "uppercase", marginBottom: ".8rem" }}>
          Assessment
        </div>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)", color: C.hi, fontWeight: 900, marginBottom: "0.8rem" }}>
          Test Your Knowledge
        </h2>
        <p
          style={{
            fontFamily: "Georgia, serif",
            fontSize: ".92rem",
            color: C.muted,
            marginBottom: "1.4rem",
            lineHeight: 1.6,
          }}
        >
          Tap the best answer for each question, then reveal the correct responses.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.4rem", marginBottom: "1.4rem" }}>
          {topic.assessment.map((q, qi) => (
            <div key={qi}>
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: ".9rem",
                  color: C.text,
                  fontWeight: 600,
                  lineHeight: 1.5,
                  marginBottom: ".45rem",
                }}
              >
                {qi + 1}. {q.q}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: ".35rem",
                  paddingLeft: "0.25rem",
                  borderLeft: `2px solid ${topic.color}40`,
                }}
              >
                {q.options.map((opt, oi) => {
                  const sel = answers[qi] === oi;
                  const correct = show && oi === q.answer;
                  const wrong = show && sel && oi !== q.answer;
                  const letter = String.fromCharCode(65 + oi); // A, B, C, D
                  return (
                    <button
                      key={oi}
                      onClick={() => { const n = [...answers]; n[qi] = oi; setAnswers(n); }}
                      style={{
                        textAlign: "left",
                        padding: "7px 10px",
                        borderRadius: 0,
                        border: "none",
                        background: correct
                          ? "#4CAF5020"
                          : wrong
                          ? "#E5393520"
                          : sel
                          ? `${topic.color}20`
                          : "transparent",
                        color: correct ? "#81C784" : wrong ? "#EF9A9A" : C.text,
                        fontFamily: "Georgia, serif",
                        fontSize: ".84rem",
                        cursor: "pointer",
                        transition: "all .18s",
                        lineHeight: 1.4,
                        boxSizing: "border-box",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <span style={{ fontFamily: "monospace", fontSize: 10, opacity: 0.75, marginRight: 6 }}>
                        {letter}.
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap" }}>
          <button
            onClick={() => setShow(!show)}
            style={{
              padding: "8px 20px",
              borderRadius: 8,
              border: `1px solid ${topic.color}`,
              background: "transparent",
              color: topic.color,
              fontFamily: "monospace",
              fontSize: 11,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            {show ? "Hide Answers" : "Check Answers"}
          </button>
        </div>

        <div style={{ marginTop: "1rem", fontFamily: "monospace", fontSize: 10, color: C.muted, letterSpacing: ".1em" }}>
          {String(slideNum).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}

/* =========================================================  TOPIC TITLE SLIDE  */
function TopicTitleSlide({ topic, totalSlides }) {
  const embedSrc = TOPIC_3D[topic.id];

  return (
    <div
      style={{
        width: "100vw",
        height: "100%",
        flexShrink: 0,
        display: "grid",
        gridTemplateColumns: "minmax(0,1.6fr) minmax(0,1fr)",
        gap: "4vw",
        alignItems: "center",
        padding: "3.5rem clamp(1.8rem, 6vw, 6rem)",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
        background: `radial-gradient(circle at top left, ${topic.color}18 0, transparent 55%), ${C.bg}`,
      }}
    >
      {/* subtle frame */}
      <div
        style={{
          position: "absolute",
          inset: "10% 6%",
          borderRadius: 24,
          border: `1px solid ${topic.color}26`,
          opacity: 0.7,
          pointerEvents: "none",
        }}
      />

      {/* ghost number */}
      <div
        style={{
          position: "absolute",
          right: "4vw",
          top: "8vh",
          fontFamily: "Georgia, serif",
          fontSize: "clamp(5rem, 16vw, 9rem)",
          color: `${topic.color}06`,
          fontWeight: 900,
          letterSpacing: "-.06em",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {topic.num}
      </div>

      {/* left column: primary title */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 14px",
            borderRadius: 999,
            border: `1px solid ${topic.color}55`,
            background: `${topic.color}10`,
            marginBottom: "1.4rem",
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: topic.color,
              boxShadow: `0 0 0 4px ${topic.color}33`,
            }}
          />
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 9,
              letterSpacing: ".22em",
              textTransform: "uppercase",
              color: topic.color,
            }}
          >
            Slide Deck {topic.num}
          </span>
        </div>

        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(2rem, 3.6vw, 3rem)",
            color: C.hi,
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: ".5rem",
            letterSpacing: "-.03em",
          }}
        >
          {topic.title}
        </h2>

        <p
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(1rem, 1.7vw, 1.2rem)",
            color: topic.color,
            fontWeight: 500,
            marginBottom: "1.6rem",
          }}
        >
          {topic.subtitle}
        </p>

        <p
          style={{
            fontFamily: "Georgia, serif",
            fontSize: ".98rem",
            color: C.muted,
            maxWidth: 520,
            lineHeight: 1.75,
          }}
        >
          Explore how{" "}
          <span style={{ color: C.hi, fontStyle: "italic" }}>{topic.title}</span>{" "}
          reflects the wider wave of reform in antebellum America and connects
          religious conviction to political change.
        </p>

        <div
          style={{
            marginTop: "1.8rem",
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 10,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: C.muted,
            }}
          >
            Era:{" "}
            <span style={{ color: C.hi, fontWeight: 600 }}>{topic.era}</span>
          </div>
          <div
            style={{
              width: 1,
              height: 16,
              background: C.border,
              opacity: 0.6,
            }}
          />
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 10,
              color: C.muted,
              letterSpacing: ".14em",
              textTransform: "uppercase",
            }}
          >
            Slide 01 / {String(totalSlides).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* right column: 3D cover + compact overview */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          justifySelf: "flex-end",
          width: "100%",
          maxWidth: 360,
        }}
      >
        {embedSrc && (
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4 / 3",
              borderRadius: 18,
              overflow: "hidden",
              border: `1px solid ${topic.color}55`,
              marginBottom: "1rem",
              boxShadow: "0 20px 45px rgba(0,0,0,0.55)",
              background: "#000",
            }}
          >
            <iframe
              src={embedSrc}
              title={`${topic.title} 3D cover`}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
              sandbox="allow-scripts allow-same-origin"
              allow="autoplay; encrypted-media; xr-spatial-tracking; accelerometer; gyroscope; magnetometer"
              allowFullScreen
            />
          </div>
        )}

        <div
          style={{
            borderRadius: 18,
            padding: "1.4rem 1.5rem",
            border: `1px solid ${C.border}`,
            background:
              "linear-gradient(145deg, rgba(24,24,31,0.96), rgba(9,9,11,0.96))",
            boxShadow: `0 22px 40px rgba(0,0,0,0.45)`,
          }}
        >
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 9,
              letterSpacing: ".22em",
              textTransform: "uppercase",
              color: C.muted,
              marginBottom: ".7rem",
            }}
          >
            3D Model: What It Shows
          </div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              fontFamily: "Georgia, serif",
              fontSize: ".9rem",
              color: C.text,
              lineHeight: 1.7,
            }}
          >
            {topic.id === "awakening" && (
              <>
                <li>• Shows how religious revivals happened outdoors.</li>
                <li>• Camp meetings attracted very large crowds.</li>
                <li>• Preachers spoke passionately to inspire faith.</li>
                <li>• People prayed and showed strong emotions.</li>
                <li>• Represents how religion spread across frontier America.</li>
              </>
            )}
            {topic.id === "mann" && (
              <>
                <li>• Shows what early American classrooms looked like.</li>
                <li>• Many children learned in small one-room schools.</li>
                <li>• Teachers taught multiple ages together.</li>
                <li>• Represents Mann’s goal of improving education.</li>
                <li>• Symbolizes the beginning of public schooling.</li>
              </>
            )}
            {topic.id === "dix" && (
              <>
                <li>• Shows poor conditions mentally ill people faced.</li>
                <li>• Many were kept in prisons instead.</li>
                <li>• Dix investigated these conditions personally.</li>
                <li>• Her reports convinced lawmakers to act.</li>
                <li>• Led to building proper mental hospitals.</li>
              </>
            )}
            {topic.id === "temperance" && (
              <>
                <li>• Shows how alcohol was a normal part of everyday life.</li>
                <li>• Highlights the problems heavy drinking caused for families.</li>
                <li>• Represents temperance reformers speaking to convince people to drink less.</li>
                <li>• Symbolizes meetings, pledges, and posters used to spread the movement.</li>
                <li>• Connects temperance activism to later national prohibition efforts.</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* =========================================================  TOPIC SECTION (horizontal scroll on vertical)  */
function TopicSection({ topic }) {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const { w, h } = useWinSize();
  const SLIDE_H = h - NAV_H;
  const TOTAL = topic.slides.length + 2; // 1 title + content + 1 assessment

  useEffect(() => {
    const update = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - (h - NAV_H);
      if (scrollable <= 0) return;
      const p = Math.min(1, Math.max(0, -(rect.top - NAV_H) / scrollable));
      setProgress(p);
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, [h]);

  // map scroll progress into stepped slides with a small "safe zone"
  const raw = progress * (TOTAL - 1); // 0 .. TOTAL-1
  const currentIndex = Math.floor(raw);
  const within = raw - currentIndex;
  const DEAD_ZONE = 0.35; // portion of each slide where the content stays fixed

  let slideOffset = currentIndex;
  if (within > DEAD_ZONE && currentIndex < TOTAL - 1) {
    const t = (within - DEAD_ZONE) / (1 - DEAD_ZONE);
    slideOffset = currentIndex + t;
  }

  const clampedOffset = Math.min(TOTAL - 1, Math.max(0, slideOffset));
  const tx = clampedOffset * w;
  const activeSlide = Math.min(TOTAL - 1, Math.round(clampedOffset));

  return (
    <section
      id={topic.id}
      ref={containerRef}
      style={{ height: `calc(${TOTAL} * (100vh - ${NAV_H}px) + ${NAV_H}px)`, position: "relative" }}
    >
      <div
        style={{
          position: "sticky",
          top: NAV_H,
          height: `calc(100vh - ${NAV_H}px)`,
          overflow: "hidden",
          background: C.bg,
          borderTop: `2px solid ${topic.color}35`,
        }}
      >
        {/* pip indicators */}
        <div
          style={{
            position: "absolute",
            top: 16,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            display: "flex",
            gap: 6,
            alignItems: "center",
          }}
        >
          {Array.from({ length: TOTAL }).map((_, i) => (
            <div
              key={i}
              style={{
                height: 3,
                width: i === activeSlide ? 28 : 7,
                borderRadius: 2,
                background: i === activeSlide ? topic.color : C.border,
                transition: "all .4s ease",
              }}
            />
          ))}
        </div>

        {/* topic label top-left */}
        <div style={{ position: "absolute", top: 12, left: "1.5rem", zIndex: 10 }}>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 9,
              letterSpacing: ".18em",
              color: topic.color,
              textTransform: "uppercase",
            }}
          >
            {topic.num} / {topic.title}
          </span>
        </div>

        {/* horizontal track */}
        <div
          style={{
            display: "flex",
            width: `${TOTAL * 100}vw`,
            height: "100%",
            transform: `translateX(-${tx}px)`,
            transition: "transform .07s linear",
            willChange: "transform",
          }}
        >
          <TopicTitleSlide topic={topic} totalSlides={TOTAL} />
          {topic.slides.map((slide, si) => {
            const slideNum = si + 2; // after title slide
            return (
              <ContentSlide
                key={si}
                slide={slide}
                color={topic.color}
                topicTitle={topic.title}
                slideNum={slideNum}
                totalSlides={TOTAL}
              />
            );
          })}
          <AssessmentSlide
            topic={topic}
            slideNum={TOTAL}
            totalSlides={TOTAL}
            tx={tx}
            vw={w}
          />
        </div>

        {/* scroll hint */}
        <div
          style={{
            position: "absolute",
            bottom: 16,
            right: "1.5rem",
            fontFamily: "monospace",
            fontSize: 10,
            color: C.muted,
            letterSpacing: ".08em",
          }}
        >
          {activeSlide < TOTAL - 1 ? "scroll to advance" : "scroll for next section"}
        </div>

        {/* bottom gradient */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 40,
            background: `linear-gradient(to bottom, transparent, ${C.bg})`,
            pointerEvents: "none",
          }}
        />
      </div>
    </section>
  );
}

/* =========================================================  ESSENTIAL QUESTION (EQ)  */
function EQSection() {
  const answerParagraphs = [
    "The Era of American Reform saw many citizens believe that society could reach perfection. Religious fervor and democratic ideals encouraged people to live moral lives and actively help their neighbors. This optimism sparked reform movements aimed at fixing social ills such as lack of education and neglect of the vulnerable. Reformers followed the idea that every individual possessed inherent dignity and potential.",
    "The Second Great Awakening was a massive religious revival that swept across the frontier and the Northeast. Unlike earlier traditions that emphasized predestination this movement taught that individuals could choose their own salvation through good works and moral living. This social gospel energized citizens to see social reform as a spiritual duty rather than just a political choice. These beliefs led to a surge in church membership and the birth of many benevolent societies.",
    "Leaders like Horace Mann and Dorothea Dix pushed for institutional change to match these moral ideals. Mann argued that a functioning democracy required an educated citizenry and he promoted state funded public schools for children of all social classes. Dix researched the treatment of mentally ill individuals and exposed how many were caged in dark cells and treated like criminals. Their work helped create public schools and mental asylums that reshaped how Americans understood education and mental health.",
    "Other reformers focused on personal behavior especially through the American Temperance Union founded in 1836. Temperance leaders linked alcohol consumption to poverty domestic violence and workplace accidents and they encouraged total abstinence to stabilize families and improve productivity. Their efforts persuaded lawmakers in some states to pass the first prohibition laws. Even when these reforms faced resistance from people defending traditional interests they showed that citizens and government could work together to redesign institutions so they better upheld human dignity for everyone.",
  ];
  const skeleton = [
    {
      num: "01",
      title: "Second Great Awakening",
      bullets: [
        "Religious revival across the Northeast and frontier",
        "Emphasis on individual salvation through good works",
        "Shift from predestination to moral choice",
        "Increased church membership plus benevolent societies",
      ],
    },
    {
      num: "02",
      title: "Role of government",
      bullets: [
        "Advocated for a functioning democracy through education",
        "Pioneered state funded public schools for all classes",
        "Established professional teacher training and curricula",
        "Redefined education as a public right for all children",
      ],
    },
    {
      num: "03",
      title: "Dorothea Dix and Mental Health Reform",
      bullets: [
        "Researched the treatment of mentally ill individuals",
        "Exposed the use of dark cells and criminal treatment",
        "Provided powerful testimony to state legislatures",
        "Created the first generation of American mental asylums",
      ],
    },
    {
      num: "04",
      title: "American Temperance Union",
      bullets: [
        "Founded in 1836 to reduce alcohol consumption",
        "Linked drinking to poverty plus domestic violence",
        "Promoted total abstinence to stabilize families",
        "Influenced the first state wide prohibition laws",
      ],
    },
  ];

  return (
    <section
      id="eq"
      style={{
        background: C.surface,
        padding: "4.5rem 1.5rem 4.8rem",
        borderTop: `1px solid ${C.border}`,
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Reveal>
          <div style={{ marginBottom: "2rem" }}>
            <div
              style={{
                fontFamily: "monospace",
                fontSize: 9,
                letterSpacing: ".22em",
                color: C.accentLo,
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Essential Question
            </div>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.35rem, 2.8vw, 1.9rem)",
                color: C.hi,
                fontWeight: 700,
                lineHeight: 1.4,
                marginBottom: "1.8rem",
              }}
            >
              EQ A2: How have economic political and cultural decisions promoted or prevented the growth of personal freedom individual responsibility equality and respect for human dignity?
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
              alignItems: "start",
            }}
            className="eq-two-col"
          >
            <div>
              <div style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: ".16em", color: C.muted, textTransform: "uppercase", marginBottom: ".75rem" }}>
                Answer
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {answerParagraphs.map((p, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: ".95rem",
                      color: C.text,
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: ".16em", color: C.muted, textTransform: "uppercase", marginBottom: ".75rem" }}>
                Bullet skeleton
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {skeleton.map((block) => (
                  <div key={block.num}>
                    <div style={{ fontFamily: "monospace", fontSize: 11, color: C.accent, marginBottom: ".4rem", fontWeight: 600 }}>
                      {block.num}. {block.title}
                    </div>
                    <ul style={{ margin: 0, paddingLeft: "1.2rem", color: C.text, fontSize: ".9rem", lineHeight: 1.55 }}>
                      {block.bullets.map((b, i) => (
                        <li key={i} style={{ marginBottom: ".25rem" }}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .eq-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* =========================================================  BIBLIOGRAPHY  */
function Bibliography() {
  const entries = [
    "\"Second Great Awakening.\" <em>Gale U.S. History Online Collection</em>, Gale, 2024. <em>Gale In Context: World History</em>, link.gale.com/apps/doc/JUHKAA341809897/WHIC?u=ebr22021&sid=bookmark-WHIC&xid=126bd276. Accessed 13 Mar. 2026.",
    "Hirrel, Leo P. \"Awakening, Second.\" <em>Dictionary of American History</em>, edited by Stanley I. Kutler, 3rd ed., vol. 1, Charles Scribner&apos;s Sons, 2003, pp. 377–379. <em>Gale In Context: World History</em>, link.gale.com/apps/doc/CX3401800336/WHIC?u=ebr22021&sid=bookmark-WHIC&xid=97aa95e1. Accessed 13 Mar. 2026.",
    "Kendall, Gavin. \"Literacy.\" <em>Encyclopedia of Children and Childhood: In History and Society</em>, edited by Paula S. Fass, vol. 2, Macmillan Reference USA, 2004, pp. 553–555. <em>Gale In Context: World History</em>, link.gale.com/apps/doc/CX3402800267/WHIC?u=ebr22021&sid=bookmark-WHIC&xid=595d9d2c. Accessed 13 Mar. 2026.",
    "\"Dorothea Dix.\" <em>Historic World Leaders</em>, edited by Anne Commire, Gale, 1994. <em>Gale In Context: World History</em>, link.gale.com/apps/doc/K1616000188/WHIC?u=ebr22021&sid=bookmark-WHIC&xid=36cd4ee1. Accessed 13 Mar. 2026.",
    "Nasalli-Rocca, E., et al. \"Hospitals, History of.\" <em>New Catholic Encyclopedia</em>, 2nd ed., vol. 7, Gale, 2003, pp. 126–134. <em>Gale In Context: World History</em>, link.gale.com/apps/doc/CX3407705412/WHIC?u=ebr22021&sid=bookmark-WHIC&xid=6d992d4b. Accessed 13 Mar. 2026.",
    "\"Second Great Awakening.\" <em>Encyclopaedia Britannica</em>, Encyclopaedia Britannica, https://www.britannica.com/event/Second-Great-Awakening. Accessed 13 Mar. 2026.",
    "\"Horace Mann.\" <em>Encyclopaedia Britannica</em>, Encyclopaedia Britannica, https://www.britannica.com/biography/Horace-Mann. Accessed 13 Mar. 2026.",
    "\"Dorothea Dix.\" National Women&apos;s History Museum, https://www.womenshistory.org/education-resources/biographies/dorothea-dix. Accessed 13 Mar. 2026.",
    "\"Reform Movements in the United States.\" Library of Congress, https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/reform-movements. Accessed 13 Mar. 2026.",
    "\"The Reform Era (1820–1860).\" National Park Service, https://www.nps.gov/articles/reform-era.htm. Accessed 13 Mar. 2026.",
  ];

  return (
    <section id="bib" style={{ background: C.bg, padding: "4.5rem 1.5rem", borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <Reveal>
          <div style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: ".22em", color: C.accentLo, textTransform: "uppercase", marginBottom: 8 }}>Team C</div>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.9rem", color: C.hi, fontWeight: 900, marginBottom: "2rem" }}>Bibliography</h2>
        </Reveal>
        <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: "1.75rem" }}>
          {entries.map((s, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: ".94rem",
                  color: C.muted,
                  lineHeight: 1.7,
                  marginBottom: "1rem",
                  paddingLeft: "2rem",
                  textIndent: "-2rem",
                }}
                dangerouslySetInnerHTML={{ __html: s }}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================  APP  */
export default function App() {
  const progress = useScrollPct();
  const scrollY = useScrollY();
  const allIds = ["hero", "context", ...TOPICS.map((t) => t.id), "eq", "wheel", "bib"];
  const active = useActiveSection(allIds);

  return (
    <div style={{ background: C.bg, color: C.text, minHeight: "100vh", position: "relative" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: ${C.bg}; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(8px)} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.8)} }
        @keyframes blink-wrong {
          0% { opacity: 1; transform: translateX(0); }
          30% { opacity: 0.3; transform: translateX(-2px); }
          60% { opacity: 1; transform: translateX(2px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: ${C.bg}; }
        ::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 2px; }
        button:focus { outline: none; }
        button { box-sizing: border-box; }
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-burger  { display: flex !important; }
        }
      `}</style>

      {/* hidden iframes preloading all 3D models as early as possible */}
      <Preload3DModels />

      <ProgressBar p={progress} />
      <Nav active={active} />
      <Dots active={active} />
      <Hero scrollY={scrollY} />
      <ContextSection />
      {TOPICS.map((t) => <TopicSection key={t.id} topic={t} />)}
      <EQSection />
      <TriviaWheel />
      <Bibliography />
    </div>
  );
}