import { Box, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useRef } from "react";


type Props = {
  setCurrentSection: (entry: any) => void;
};

function Rightbar({ setCurrentSection }: Props) {
  const isNonMobileScreens = useMediaQuery("(min-width:1001px)");
  const sectionsRef = useRef<(HTMLSpanElement | null)[]>([]);
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    sectionsRef.current.forEach((section: any) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [setCurrentSection]);

  return (
    <Box
      sx={{
        width: isNonMobileScreens ? "75%" : "100%",
        // height: "calc(100vh - 220px)",
        // overflowY: "auto",
        padding: isNonMobileScreens ? "" : "0 2rem",
      }}
    >
      <Box>
        
        <Typography
          variant="h2"
          sx={{
            fontSize: isNonMobileScreens ? "2.5rem" : "2rem",
            mb: 3,
            textAlign: "start",
            fontWeight: isNonMobileScreens ? "" : "500",
          }}
          id="section2"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          The Higher Education system
        </Typography>
        <Typography
          sx={{
            textAlign: "start",
            fontSize: isNonMobileScreens ? "1rem" : "0.8rem",
            mt: 3,
            mb: 3,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                width: "25%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              University
            </Typography>
            <Box
              sx={{
                width: "75%",
                paddingLeft: "2rem",
                textAlign: "justify",
                mr: 5,
                ml: isNonMobileScreens ? "" : "2rem",
              }}
            >
              <ul
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  padding: 0,
                  margin: 0,
                }}
              >
                <li
                  style={{
                    width: isNonMobileScreens ? "50%" : "100%",
                    boxSizing: "border-box",
                  }}
                >
                  Research-Theory-Oriented Teaching
                </li>
                <li
                  style={{
                    width: isNonMobileScreens ? "50%" : "100%",
                    boxSizing: "border-box",
                  }}
                >
                  Base and Applied Research
                </li>
                <li
                  style={{
                    width: isNonMobileScreens ? "50%" : "100%",
                    boxSizing: "border-box",
                  }}
                >
                  Bachelor's and Master's Degrees
                </li>
                <li
                  style={{
                    width: isNonMobileScreens ? "50%" : "100%",
                    boxSizing: "border-box",
                  }}
                >
                  Doctoral Degrees
                </li>
                <li
                  style={{
                    width: isNonMobileScreens ? "50%" : "100%",
                    boxSizing: "border-box",
                  }}
                >
                  Broad Curriculum
                </li>
                <li
                  style={{
                    width: isNonMobileScreens ? "50%" : "100%",
                    boxSizing: "border-box",
                  }}
                >
                  Larger Student Body
                </li>
                <li
                  style={{
                    width: isNonMobileScreens ? "50%" : "100%",
                    boxSizing: "border-box",
                  }}
                >
                  Global Actors
                </li>
              </ul>
            </Box>
          </Box>
          <br />
          <br />
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: isNonMobileScreens ? "70%" : "50%",
                pr: "1rem",
                pt: "1rem",
                textAlign: "justify",
              }}
            >
              <ul
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  padding: 0,
                  margin: 0,
                }}
              >
                <li
                  style={{
                    width: isNonMobileScreens ? "50%" : "100%",
                    boxSizing: "border-box",
                  }}
                >
                  Practical Orientation Teaching
                </li>
                <li
                  style={{
                    width: isNonMobileScreens ? "50%" : "100%",
                    boxSizing: "border-box",
                  }}
                >
                  Applied Research
                </li>
                <li
                  style={{
                    width: isNonMobileScreens ? "50%" : "100%",
                    boxSizing: "border-box",
                  }}
                >
                  Bachelor's and Master's Degrees
                </li>
                <li
                  style={{
                    width: isNonMobileScreens ? "50%" : "100%",
                    boxSizing: "border-box",
                  }}
                >
                  Doctoral Degrees in some fields
                </li>
                <li
                  style={{
                    width: isNonMobileScreens ? "50%" : "100%",
                    boxSizing: "border-box",
                  }}
                >
                  Strong Industry Links
                </li>
                <li
                  style={{
                    width: isNonMobileScreens ? "50%" : "100%",
                    boxSizing: "border-box",
                  }}
                >
                  Smaller Student Body
                </li>
                <li
                  style={{
                    width: isNonMobileScreens ? "50%" : "100%",
                    boxSizing: "border-box",
                  }}
                >
                  Regional Actors
                </li>
              </ul>
            </Box>
            <Typography
              sx={{
                width: "25%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "2rem",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              University of Applied Science
            </Typography>
          </Box>
          <br />
          <br />
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                width: "25%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "2rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              University of Arts
            </Typography>
            <Box
              sx={{
                width: "75%",
                paddingLeft: "2rem",
                textAlign: "justify",
                mr: 5,
                ml: isNonMobileScreens ? "" : "2rem",
              }}
            >
              <ul
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  padding: 0,
                  margin: 0,
                }}
              >
                <li
                  style={{
                    width: isNonMobileScreens ? "50%" : "100%",
                    boxSizing: "border-box",
                  }}
                >
                  Creative and Artistic Focus
                </li>
                <li
                  style={{
                    width: isNonMobileScreens ? "50%" : "100%",
                    boxSizing: "border-box",
                  }}
                >
                  Practical Training
                </li>
                <li
                  style={{
                    width: isNonMobileScreens ? "50%" : "100%",
                    boxSizing: "border-box",
                  }}
                >
                  Competitive Admission
                </li>
                <li
                  style={{
                    width: isNonMobileScreens ? "50%" : "100%",
                    boxSizing: "border-box",
                  }}
                >
                  Small Class Sizes
                </li>
                <li
                  style={{
                    width: isNonMobileScreens ? "50%" : "100%",
                    boxSizing: "border-box",
                  }}
                >
                  Professional Preparation
                </li>
              </ul>
            </Box>
          </Box>

          <br />
          <br />
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: isNonMobileScreens ? "2.5rem" : "2rem",
            mb: 3,
            textAlign: "start",
            fontWeight: isNonMobileScreens ? "" : "500",
          }}
          id="section3"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          What factors should you consider when applying to germany?
        </Typography>
        <Typography
          sx={{
            fontSize: isNonMobileScreens ? "1rem" : "0.8rem",
            textAlign: "justify",
            mr: 5,
          }}
        >
          Consider all aspects of the university application process to find the
          best fit for your academic and career goals.
          <br />
          <br />
          When applying to universities in Germany, it's essential to think
          about your interests, abilities. and future profession. Additionally,
          you should review the admission requirements, research focus of the
          program. and the location of the university to make an informed
          decision.
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: isNonMobileScreens ? "2.5rem" : "2rem",
            mb: 3,
            textAlign: "start",
            fontWeight: isNonMobileScreens ? "" : "500",
            mt: 8,
          }}
          id="section4"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          What factors should you consider beyond university ranking?
        </Typography>
        <Typography
          sx={{
            fontSize: isNonMobileScreens ? "1rem" : "0.8rem",
            mt: 3,
            mb: 3,
            textAlign: "justify",
            mr: 5,
          }}
        >
          Focus on finding a university that aligns with your personal
          preferences and academic needs.
          <br />
          It's important to think about your own interests and goals, rather
          than solely focusing on external expectations.
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: isNonMobileScreens ? "2.5rem" : "2rem",
            mb: 3,
            mt: 8,
            textAlign: "start",
            fontWeight: isNonMobileScreens ? "" : "500",
          }}
          id="section5"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          What are three types of German national visa?
        </Typography>
        <Typography
          sx={{
            fontSize: isNonMobileScreens ? "1rem" : "0.8rem",
            textAlign: "justify",
            mr: 5,
          }}
        >
          There are three types of German national visas (D visa) available to
          students, depending on your situation:
          <ul>
            <li>
              <strong>German Student Visa:</strong> For those who have been
              accepted into a German higher education institution and are
              prepared to begin their studies.
            </li>
            <li>
              <strong>German Student Applicant Visa:</strong> For those who have
              applied to a state-approved higher education institution or a
              state-approved preparatory course provider, have a strong
              likelihood of being admitted, but do not yet possess a certificate
              of admission or application confirmation.
            </li>
            <li>
              <strong>German Language Course Visa:</strong> For individuals who
              wish to attend intensive German language courses in Germany
              without intending to pursue university studies.
            </li>
          </ul>
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: isNonMobileScreens ? "2.5rem" : "2rem",
            mb: 3,
            textAlign: "start",
            fontWeight: isNonMobileScreens ? "" : "500",
            mt: 8,
          }}
          id="section6"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          What Are German Student Visa Requirements?
        </Typography>
        <Typography
          sx={{
            fontSize: isNonMobileScreens ? "1rem" : "0.8rem",
            mt: 3,
            mb: 3,
            textAlign: "justify",
            mr: 5,
          }}
        >
          The key requirements for applying for a German Student Visa are:
          <ol>
            <li>
              <strong>Visa Application Documents</strong>
              <ul>
                <li>Completed and signed national visa application form.</li>
                <li>Valid passport.</li>
                <li>Two photocopies of your passport.</li>
                <li>Birth certificate.</li>
                <li>Marriage certificate (if applicable).</li>
                <li>Your child's birth certificate (if applicable).</li>
                <li>
                  Recent passport-style photographs (up to 3). You can
                  conveniently obtain biometric photos from
                  MyBiometricPhotos.com.{" "}
                </li>
                <li>
                  Photocopies of previous German residence titles (if
                  applicable).
                </li>
              </ul>
            </li>
            <br />
            <li>
              <strong>
                Proof of Financial Resources (Finanzierungsnachweis)
              </strong>
              <br />
              You can provide one of the following to demonstrate your financial
              resources:
              <ul>
                <li>
                  Confirmation of a €11,208 deposit in a German blocked bank
                  account (Sperrkonto).
                </li>
                <li>
                  Sufficient proof of your parents' income records and financial
                  assets.
                </li>
                <li>
                  Scholarship awarding certificate specifying the coverage
                  amount.
                </li>
                <li>
                  Letter of commitment by a German resident
                  (Verpflichtungserklärung) who can cover your expenses during
                  your studies.{" "}
                </li>
                <li>Bank guarantee issued to you by a recognized bank.</li>
              </ul>
            </li>
            <br />
            <li>
              <strong>Proof of Purpose of Stay</strong>
              <br />
              You can submit any of the following:
              <ul>
                <li>
                  Confirmation of admission (Zulassungsbescheid) from a
                  recognized German educational institution, indicating your
                  program start date and language of instruction.
                </li>
                <li>
                  Confirmation of admission to a university preparatory course
                  (Studienkolleg), which can be a letter from uni-assist,
                  confirmation of admission as an applicant, communication with
                  the university regarding conditions for final admission, or
                  proof of being confirmed as a participant in the course.
                </li>
                <li>
                  Proof of conditional admission (Bedingter Zulassungsbescheid)
                  and confirmation of enrollment in a long-term intensive
                  language course (Intensiv-Sprachkurs) lasting over 6 months
                  with a minimum of 18 weekly hours. This can be proof of
                  conditional university admission (letter from uni-assist,
                  confirmation of admission as an applicant, communication with
                  the university regarding conditions for final admission), or
                  proof of payment for the first three months of the course with
                  a confirmed spot.
                </li>
              </ul>
            </li>
            <br />
            <li>
              <strong>Evidence of Previous Qualifications</strong>
              <br />
              Submit official documents and notarized copies of your academic
              qualifications. Include your original school-leaving certificate
              and, if applicable, your degree certificate for Master's or PhD
              studies.
            </li>
            <br />
            <li>
              <strong>Health Insurance</strong>
              <br />
              Health insurance is mandatory for studying in Germany. If you are
              from an EU/EEA country or have an agreement with Germany, you may
              use your existing insurance with a European Health Insurance Card
              (EHIC) or other form of health insurance. Otherwise, you must
              obtain German health insurance for your student visa and
              enrollment.
              <br />
              Many providers offer digital registration before arriving in
              Germany, with final details to be submitted upon arrival.
            </li>
            <br />
            <li>
              <strong>Proof of German or English Proficiency</strong>
              <br />
              To obtain a national student visa in Germany, you must prove
              proficiency in the language of instruction for your chosen study
              program. Typically, a minimum B2 level in German and/or English is
              required, which can be demonstrated through language exams.
            </li>
            <br />
            <li>
              <strong>Visa Processing Fee (€75)</strong>
              <br />
              The visa processing fee for a German national student visa is €75,
              while minors (applicants under 18) pay a reduced fee of €37.50.
              You should bring this exact amount in local currency when you
              submit your application. Some recipients of scholarships issued by
              a public institution may be exempt from this fee, so check with
              your local German embassy or consulate for specific details. There
              are no refunds if your visa is denied.
            </li>
          </ol>
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: isNonMobileScreens ? "2.5rem" : "2rem",
            mb: 3,
            textAlign: "start",
            fontWeight: isNonMobileScreens ? "" : "500",
            mt: 8,
          }}
          id="section7"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          How to enroll in Your desired Academic Program?
        </Typography>
        <Typography
          sx={{
            fontSize: isNonMobileScreens ? "1rem" : "0.8rem",
            mt: 3,
            mb: 3,
            textAlign: "justify",
            mr: 5,
          }}
        >
          To start your studies, you must officially enroll at the university
          during the enrollment period specified in your admission letter. This
          process, called matriculation, involves submitting required documents
          to the student affairs office (Studentensekretariat) at your
          university. Additionally, you’ll need to pay the semester fee before
          receiving your student ID, password, and student ID card.
          <br />
          Here’s a list of documents required for enrollment as an international
          student in Germany:
          <ul>
            <li>Application for enrollment (online or printed)</li>
            <li>
              National passport or national ID card with a valid visa (if
              applicable)
            </li>
            <li>Acceptance letter from your university</li>
            <li>Proof of statutory health insurance in Germany</li>
            <li>
              German University Entrance Qualification or an equivalent
              recognized qualification
            </li>
          </ul>
          <strong>Note:</strong> Your university’s International Office
          (Akademisches Auslandsamt) can provide the most up-to-date information
          for both academic and residence-related inquiries.
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: isNonMobileScreens ? "2.5rem" : "2rem",
            mb: 3,
            textAlign: "start",
            fontWeight: isNonMobileScreens ? "" : "500",
            mt: 8,
          }}
          id="section8"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          What are requirements to Apply for a Student Residence Permit in
          Germany?
        </Typography>
        <Typography
          sx={{
            fontSize: isNonMobileScreens ? "1rem" : "0.8rem",
            mt: 3,
            mb: 3,
            textAlign: "justify",
            mr: 5,
          }}
        >
          To apply for a residence permit, you will need to provide the
          following documents:
          <ul>
            <li>
              A duly completed application form for a residence permit, known in
              German as the "Antrag auf Erteilung eines Aufenthaltstitels."
            </li>
            <li>
              Your national passport or national ID card, which must show a
              valid entry visa if you entered Germany with a visa.
            </li>
            <li>Documents showing your permanent address in Germany.</li>
            <li>
              Confirmation of registration with the city, known as the
              "Meldebescheinigung," confirming your registration at the local
              Resident’s Office.
            </li>
            <li>
              Proof of residence certificate, called the
              "Wohnungsgeberbestätigung" or "Wohnungsgeberbescheinigung" in
              German, which must be signed and filled out by your landlord.
            </li>
            <li>Recent passport-type photographs.</li>
            <li>
              Proof of admission to studies, such as a certificate of
              enrollment, confirmation of admission, or evidence of conditional
              admission.
            </li>
            <li>
              Proof of financial subsistence, using the same evidence provided
              when applying for the visa, if applicable.
            </li>
            <li>
              Money to cover the application fee for the German residence
              permit, which varies by location and circumstances. The first
              issuance fee is approximately 100 euros for adults and 50 euros
              for minors. Extending a residence permit typically costs 93-97
              euros for adults and half that amount for minors.
            </li>
          </ul>
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: isNonMobileScreens ? "2.5rem" : "2rem",
            mb: 3,
            textAlign: "start",
            fontWeight: isNonMobileScreens ? "" : "500",
            mt: 8,
          }}
          id="section9"
          ref={(el) => (sectionsRef.current[8] = el)}
        >
          Activities Eligible for a German Student Visa
        </Typography>
        <Typography
          sx={{
            fontSize: isNonMobileScreens ? "1rem" : "0.8rem",
            mt: 3,
            mb: 3,
            textAlign: "justify",
            mr: 5,
          }}
        >
          You can obtain a German student visa for the following activities:
          <ul>
            <li>
              <strong>Non-academic language course studies</strong>: Enroll in a
              course lasting 3-12 months with at least 18 hours of weekly
              lessons. The course should not be intended to prepare you for
              further academic studies.
            </li>
            <li>
              <strong>Pre-academic measures</strong>: Participate in a course
              longer than 3 months designed to prepare you for full-time
              academic studies.
            </li>
            <li>
              <strong>Pre-academic German language courses</strong>: Join a
              preparatory course to qualify for recognized tests, a prerequisite
              set by the university before your final admission.
            </li>
            <li>
              <strong>Preparatory foundation course (Studienkolleg)</strong>:
              Take a course to prepare for the qualification test
              Feststellungsprüfung, which provides a recognized university
              entrance qualification (Hochschulzugangsberechtigung) if your
              foreign high school certificate is not recognized in Germany.
            </li>
            <li>
              <strong>Propaedeutic course studies (Propädeutikum)</strong>:
              These courses, provided by your education institution, focus on
              language, academic skills, and knowledge of Germany’s education
              system and methodology.
            </li>
            <li>
              <strong>Mandatory preliminary internship</strong>: Complete an
              internship required for admission to a study program, such as
              those at a University of Applied Sciences.
            </li>
            <li>
              <strong>University degree-awarding studies</strong>: Receive
              confirmation of admission from a recognized higher education
              provider for studies leading to a bachelor's (BA, BSc, BSEng),
              master's (MA, MSc, MEng), or PhD degree.
            </li>
          </ul>
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: isNonMobileScreens ? "2.5rem" : "2rem",
            mb: 3,
            textAlign: "start",
            fontWeight: isNonMobileScreens ? "" : "500",
            mt: 8,
          }}
          id="section10"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
          Which Language Certificates Are Recognized for Studying in Germany?
        </Typography>
        <Typography
          sx={{
            fontSize: isNonMobileScreens ? "1rem" : "0.8rem",
            mt: 3,
            mb: 3,
            textAlign: "justify",
            mr: 5,
          }}
        >
          When preparing to study in a program conducted in German, each
          university has its own language proficiency requirements, and specific
          programs may have different criteria.
          <br />
          Typically, German universities accept the following certificates and
          levels as proof of language proficiency:
          <ul>
            <li>
              DSH (Deutsche Sprachprüfung für den Hochschulzugang) – DSH 2
            </li>
            <li>TestDaF (Test of German as a Foreign Language) – TDN 4</li>
            <li>Certificates from the Goethe-Institut – C1 or C2</li>
            <li>
              DSD German language diploma (Deutsches Sprachdiplom der
              Kultusministerkonferenz) – DSD II
            </li>
          </ul>
          Similarly, for programs taught in English, each university and program
          will have its own requirements.
          <br />
          To demonstrate English proficiency for English-taught programs, German
          universities commonly accept these certificates and scores:
          <ul>
            <li>
              IELTS (International English Language Testing System) – 6.0, 6.5,
              7.0
            </li>
            <li>TOEFL (iBT or PBT) – iBT 94-72, PBT 626-543</li>
            <li>
              Proof that English was the language of instruction in previous
              studies – B2-C2
            </li>
            <li>Cambridge English language certificates (FCE, CAE, CPE)</li>
            <li>TOEIC or UNIcert are also frequently accepted</li>
          </ul>
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: isNonMobileScreens ? "2.5rem" : "2rem",
            mb: 3,
            textAlign: "start",
            fontWeight: isNonMobileScreens ? "" : "500",
            mt: 8,
          }}
          id="section11"
          ref={(el) => (sectionsRef.current[10] = el)}
        >
          What Is the APS Certificate?
        </Typography>
        <Typography
          sx={{
            fontSize: isNonMobileScreens ? "1rem" : "0.8rem",
            mt: 3,
            mb: 3,
            textAlign: "justify",
            mr: 5,
          }}
        >
          The APS Certificate, provided by the Academic Evaluation Center
          (Akademische Prüfstelle – APS), is an official document from the
          German Embassy and DAAD. It authenticates the educational backgrounds
          and certificates of students from China, Vietnam, and India.
          <br />
          This certificate is required for students from these regions applying
          to German universities, as it ensures that their qualifications align
          with German standards.
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: isNonMobileScreens ? "2.5rem" : "2rem",
            mb: 3,
            textAlign: "start",
            fontWeight: isNonMobileScreens ? "" : "500",
            mt: 8,
          }}
          id="section12"
          ref={(el) => (sectionsRef.current[11] = el)}
        >
          What Does the Equivalent of a Bachelor’s/Master’s Degree in Germany
          Mean?
        </Typography>
        <Typography
          sx={{
            fontSize: isNonMobileScreens ? "1rem" : "0.8rem",
            mt: 3,
            mb: 3,
            textAlign: "justify",
            mr: 5,
          }}
        >
          The equivalent of a bachelor’s or master’s degree in Germany signifies
          that foreign academic qualifications are recognized as comparable to
          the corresponding German degrees.
          <br />
          This implies that if your degree from another country is deemed
          equivalent, it holds the same academic value and qualification level
          as a bachelor’s or master’s degree from a German university.
          <br />
          The Central Office for Foreign Education (ZAB) assesses foreign
          qualifications, and you can use their database (anabin) to verify if
          your degree is acknowledged in Germany.
        </Typography>
      </Box>
    </Box>
  );
}

export default Rightbar;
