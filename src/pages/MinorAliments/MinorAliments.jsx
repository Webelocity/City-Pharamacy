import React from "react";
import "./MinorAliments.scss";
import bottm from "../../assets/Circle Background bottm.png";
import shopbackground from "../../assets/testingBG.png";
import bg from "../../assets/testingBG.png";
import MinorAliments from "../../assets/MinorAliments.png";
import MinorAliments1 from "../../assets/MinorAliments1.png";
import MinorAliments2 from "../../assets/MinorAliments2.png";
import MinorAliments3 from "../../assets/MinorAliments3.png";
import MinorAliments4 from "../../assets/MinorAliments4.png";
import MinorAliments5 from "../../assets/MinorAliments5.png";
import MinorAliments6 from "../../assets/MinorAliments6.png";
import MinorAliments7 from "../../assets/MinorAliments7.png";
import MinorAliments8 from "../../assets/MinorAliments8.png";
import MinorAliments9 from "../../assets/MinorAliments9.png";
import MinorAliments10 from "../../assets/MinorAliments10.png";
import MinorAliments11 from "../../assets/MinorAliments11.png";
import MinorAliments12 from "../../assets/MinorAliments12.png";
import MinorAliments13 from "../../assets/MinorAliments13.png";
import MinorAliments14 from "../../assets/MinorAliments14.png";
import MinorAliments15 from "../../assets/MinorAliments15.png";
import MinorAliments16 from "../../assets/MinorAliments16.png";
import MinorAliments17 from "../../assets/MinorAliments17.png";
import MinorAliments18 from "../../assets/MinorAliments18.png";
import MinorAliments19 from "../../assets/MinorAliments19.png";
import MinorAliments20 from "../../assets/MinorAlimentsLast.png";
import Appointment from "../../components/Appointment";

const Minoraliments = () => {
  const [showForm, setshowForm] = React.useState(false);

  return (
    <div className="MinorAlimentsWrapper">
      <Appointment open={showForm} handleClose={() => setshowForm(false)} />

      <div className="SectionOne">
        <div className="wrap">
          <div className="textbox">
            <p className="header">Your Health, Our Expertise</p>
            <p className="note">
              Comprehensive Minor Ailment Assessments at City Pharmacy.{" "}
            </p>
            <div className="boxes">
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none">
                  <path
                    d="M23.75 27.125V24.625C23.75 23.2989 23.2232 22.0271 22.2855 21.0895C21.3479 20.1518 20.0761 19.625 18.75 19.625H11.25C9.92392 19.625 8.65215 20.1518 7.71447 21.0895C6.77678 22.0271 6.25 23.2989 6.25 24.625V27.125"
                    stroke="#219D50"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 14.625C17.7614 14.625 20 12.3864 20 9.625C20 6.86358 17.7614 4.625 15 4.625C12.2386 4.625 10 6.86358 10 9.625C10 12.3864 12.2386 14.625 15 14.625Z"
                    stroke="#219D50"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="title">In-person</p>
              </div>
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none">
                  <path
                    d="M27.5008 22.0251V25.7751C27.5022 26.1232 27.4309 26.4678 27.2914 26.7868C27.1519 27.1058 26.9474 27.3921 26.6909 27.6275C26.4343 27.8628 26.1315 28.042 25.8017 28.1535C25.4719 28.265 25.1225 28.3065 24.7758 28.2751C20.9293 27.8572 17.2345 26.5428 13.9883 24.4376C10.9681 22.5185 8.40744 19.9578 6.48827 16.9376C4.37574 13.6766 3.06107 9.96386 2.65077 6.10012C2.61953 5.75445 2.66061 5.40607 2.7714 5.07715C2.88218 4.74823 3.06023 4.44598 3.29423 4.18965C3.52822 3.93331 3.81303 3.72851 4.13051 3.58827C4.44799 3.44804 4.7912 3.37545 5.13827 3.37512H8.88827C9.4949 3.36915 10.083 3.58397 10.543 3.97954C11.0029 4.3751 11.3034 4.92443 11.3883 5.52512C11.5465 6.7252 11.8401 7.90353 12.2633 9.03762C12.4315 9.48503 12.4678 9.97126 12.3682 10.4387C12.2685 10.9062 12.0368 11.3353 11.7008 11.6751L10.1133 13.2626C11.8927 16.3921 14.4838 18.9832 17.6133 20.7626L19.2008 19.1751C19.5406 18.839 19.9697 18.6074 20.4372 18.5077C20.9046 18.408 21.3909 18.4444 21.8383 18.6126C22.9724 19.0358 24.1507 19.3293 25.3508 19.4876C25.958 19.5733 26.5125 19.8791 26.9089 20.347C27.3054 20.8148 27.516 21.4121 27.5008 22.0251Z"
                    stroke="#219D50"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="title">Phone</p>
              </div>
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none">
                  <path
                    d="M24.9994 20.875V9.625C24.9994 8.96196 24.736 8.32607 24.2671 7.85723C23.7983 7.38839 23.1624 7.125 22.4994 7.125H7.49935C6.83631 7.125 6.20043 7.38839 5.73159 7.85723C5.26275 8.32607 4.99935 8.96196 4.99935 9.625V20.875M24.9994 20.875H4.99935M24.9994 20.875L26.5994 24.0625C26.6957 24.2537 26.7413 24.4665 26.7319 24.6805C26.7224 24.8944 26.6581 25.1023 26.5451 25.2842C26.4322 25.4662 26.2744 25.6161 26.0869 25.7195C25.8994 25.823 25.6885 25.8765 25.4744 25.875H4.52435C4.31022 25.8765 4.09929 25.823 3.91179 25.7195C3.72429 25.6161 3.56651 25.4662 3.45357 25.2842C3.34064 25.1023 3.27635 24.8944 3.26685 24.6805C3.25736 24.4665 3.30299 24.2537 3.39935 24.0625L4.99935 20.875"
                    stroke="#219D50"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="title">Virtual</p>
              </div>
            </div>
          </div>
          <img
            src={MinorAliments}
            alt="doctor and paitient"
            style={{ marginBottom: "-59px" }}
          />
        </div>
        <img src={bottm} alt="background" className="bottomImage" />
        <img src={shopbackground} alt="dots" className="topImage" />
      </div>
      <div className="SectionTwo">
        <div className="wrap">
          <div className="text">
            <p className="subheader">Minor Ailments</p>
            <p className="header">19 Minor Ailments EvaluationMinor Ailments</p>
            <p className="note">
              Ontario's healthcare landscape is evolving, and at City Pharmacy,
              we're at the forefront of this change. City pharmacists are
              authorized to assess and provide prescription for for minor
              ailments, ensuring you receive timely and appropriate care.
            </p>
          </div>
          <div className="boxesWrap">
            <div className="whitebox">
              <img src={MinorAliments1} alt="image" />
              <p className="header">Acne</p>
              <p className="note">
                If you're experiencing mild acne, you might notice the following
                symptoms:
                <br />
                <br /> <span>Whiteheads and Blackheads:</span> These are small,
                non-inflamed bumps on the skin.
                <br /> <span>Small Red Bumps and Pimples with Pus: </span>These
                are slightly inflamed, often with a white center.
                <br /> <span>Limited Number of Lesions:</span> Typically, there
                are less than 30 total bumps or pimples, and not all of them
                appear inflamed or red.
              </p>
              <a
                className="button"
                href="https://citypharmacy.medmeapp.ca/schedule/groups/minorAilments?appointmentType=Acne&province=ON"
                target="blank">
                Book Now
              </a>
            </div>
            <div className="whitebox">
              <img src={MinorAliments2} alt="image" />
              <p className="header">Allergic rhinitis</p>
              <p className="note">
                If you're experiencing allergic rhinitis, commonly known as hay
                fever, you might notice the following symptoms:
                <br />
                <br /> <span>Sneezing: </span> Frequent, sometimes
                uncontrollable sneezing episodes.
                <br /> <span>Nasal Congestion:</span>A stuffy or excessively
                runny nose. Itchiness: An itchy sensation in the nose, eyes, or
                throat.
                <br /> <span>Duration of Symptoms: </span>Symptoms typically
                persist for more than 7 days continuously.
              </p>
              <a
                className="button"
                href="https://citypharmacy.medmeapp.ca/schedule/groups/minorAilments?appointmentType=Allergies&province=ON"
                target="blank">
                Book Now
              </a>
            </div>
            <div className="whitebox">
              <img src={MinorAliments3} alt="image" />
              <p className="header">Aphthous Ulcers (canker sores)</p>
              <p className="note">
                Canker sores can be identified by the following symptoms:
                <br />
                <br /> <span>Painful Ulcers:</span> White- or cream-coloured
                ulcers that are round or oval, often accompanied by a sharp
                pain.
                <br /> <span>Raised Red Border:</span>The ulcers typically have
                a distinct raised red border.
                <br /> <span>Location:</span> These ulcers commonly appear
                inside the cheeks, on the lips, sides of the tongue, and on the
                roof or floor of the mouth.
                <br /> <span>Size:</span>Generally, each ulcer is less than 1cm
                in diameter.
              </p>
              <a
                className="button"
                href="https://citypharmacy.medmeapp.ca/schedule/groups/minorAilments?appointmentType=CankerSores&province=ON"
                target="blank">
                Book Now
              </a>
            </div>
          </div>
          <div className="boxesWrap">
            <div className="whitebox">
              <img src={MinorAliments4} alt="image" />
              <p className="header">Candidal stomatitis (oral thrush)</p>
              <p className="note">
                Oral thrush is characterized by the following symptoms:
                <br />
                <br />{" "}
                <span>White/Creamy Patches: Whiteheads and Blackheads:</span>
                Noticeable white or creamy-white spots or patches on the lips,
                inside of the mouth, tongue, and/or the roof of the mouth.
                <br /> <span>Cottage Cheese Appearance: </span> These patches
                often have a texture or appearance similar to cottage cheese.
                <br /> <span>Scrapable Patches:</span> The white patches can
                typically be scraped off, revealing a red, sensitive area
                underneath.
                <br /> <span>Mouth Changes:</span>Accompanying symptoms may
                include a dry mouth and/or a loss of taste.
              </p>
              <a
                className="button"
                href="https://citypharmacy.medmeapp.ca/schedule/groups/minorAilments?appointmentType=OralThrush&province=ON"
                target="blank">
                Book Now
              </a>
            </div>
            <div className="whitebox">
              <img src={MinorAliments5} alt="image" />
              <p className="header">
                Dermatitis (atopic, eczema, allergic and contact)
              </p>
              <p className="note">
                Symptoms of Dermatitis, including Atopic Dermatitis (Eczema),
                typically involve
                <br />
                <br /> <span>Dry, Itchy Skin: </span> Persistent dryness,
                redness, and itchiness of the skin.
                <br /> <span>Blisters:</span>Cracked skin with occasional oozing
                blisters. throat.
                <br /> <span>Skin Discoloration: </span>Areas of skin that
                appear darker or lighter than the surrounding skin.
                <br /> <span>Scaly Patches: </span>Skin that is scaly, patchy,
                and often inflamed
              </p>
              <a
                className="button"
                href="https://citypharmacy.medmeapp.ca/schedule/groups/minorAilments?appointmentType=SkinRash&province=ON"
                target="blank">
                Book Now
              </a>
            </div>
            <div className="whitebox">
              <img src={MinorAliments6} alt="image" />
              <p className="header">Diaper Dermatitis</p>
              <p className="note">
                Symptoms of Diaper Rash, commonly seen in babies and toddlers,
                include: <br />
                <br /> <span>Persistent Rashes:</span> Rashes and redness around
                the diaper area lasting more than 3 days.
                <br /> <span>Pain and Discomfort:</span> Noticeable pain and
                crying during urination, diaper changes, and defecation.
                <br /> <span>Affected Sleep:</span>Disrupted or altered sleep
                patterns due to discomfort.
              </p>
              <a
                className="button"
                href="https://citypharmacy.medmeapp.ca/schedule/groups/minorAilments?appointmentType=DiaperRash&province=ON"
                target="blank">
                Book Now
              </a>
            </div>
          </div>
          <div className="boxesWrap">
            <div className="whitebox">
              <img src={MinorAliments7} alt="image" />
              <p className="header">Dysmenorrhea</p>
              <p className="note">
                Also known as menstrual cramps, and you may experience the
                following symptoms:
                <br />
                <br /> <span>Abdominal Pain:</span> Pain and cramps in the lower
                abdominal area.
                <br /> <span>Lower Back Pain: </span>Discomfort in the lower
                back, often beginning a few hours before the onset of
                menstruation.
                <br /> <span>Duration of Pain:</span> The pain can persist for a
                few hours and may extend up to several days.
              </p>
              <a
                className="button"
                href="https://citypharmacy.medmeapp.ca/schedule/groups/minorAilments?appointmentType=PeriodCramps&province=ON"
                target="blank">
                Book Now
              </a>
            </div>
            <div className="whitebox">
              <img src={MinorAliments8} alt="image" />
              <p className="header">Gastroesophageal reflux disease (GERD)</p>
              <p className="note">
                Symptoms of Acid Reflux (GERD) often include
                <br />
                <br /> <span>Burping/Stomach Acid: </span> Frequent burping or
                the sensation of stomach acid rising into the mouth.
                <br /> <span>Burning Sensation:</span>A burning feeling in the
                stomach or lower chest, often rising up to the neck.
                <br /> <span>Sleep Disruption: </span>Difficulty getting a good
                night's sleep due to heartburn.
                <br /> <span>Upper Stomach Pain: </span>Pain or discomfort in
                the middle of the upper stomach area.
                <br /> <span>Nausea: </span>Feelings of nausea, especially after
                eating.
              </p>
              <a
                className="button"
                href="https://citypharmacy.medmeapp.ca/schedule/groups/minorAilments?appointmentType=HeartBurn&province=ON"
                target="blank">
                Book Now
              </a>
            </div>
            <div className="whitebox">
              <img src={MinorAliments9} alt="image" />
              <p className="header">Hemorrhoids</p>
              <p className="note">
                When experiencing Hemorrhoids, the following symptoms may be
                present:
                <br />
                <br /> <span>Discomfort:</span>Itching, burning, or swelling in
                the anal/rectum area, which may or may not be painful.
                <br /> <span>Bleeding:</span>Bright red blood noticeable during
                or after bowel movements.
                <br /> <span>Bowel Movement Issues:</span> Constipation and
                difficulty in having a bowel movement.
                <br /> <span>Physical Changes:</span>Presence of a lump in the
                anal/rectum area.
              </p>
              <a
                className="button"
                href="https://citypharmacy.medmeapp.ca/schedule/groups/minorAilments?appointmentType=Hemorrhoids&province=ON"
                target="blank">
                Book Now
              </a>
            </div>
          </div>
          <div className="boxesWrap">
            <div className="whitebox">
              <img src={MinorAliments10} alt="image" />
              <p className="header">Herpes labialis (cold sores)</p>
              <p className="note">
                <br /> <span>Rash/Bumps:</span> Rash or bumps around the border
                of the lip.
                <br />{" "}
                <span>
                  Fluid DischargeSmall Red Bumps and Pimples with Pus:{" "}
                </span>
                Presence of clear, sticky fluid around the rash.
                <br /> <span>Sensory Symptoms:</span> Itching, tingling, or
                burning sensations preceding the rash.
                <br /> <span>Skin Changes:</span> Redness or inflamed skin
                surrounding the rash.
              </p>
              <a
                className="button"
                href="https://citypharmacy.medmeapp.ca/schedule/groups/minorAilments?appointmentType=ColdSores&province=ON"
                target="blank">
                Book Now
              </a>
            </div>
            <div className="whitebox">
              <img src={MinorAliments11} alt="image" />
              <p className="header">Impetigo</p>
              <p className="note">
                When experiencing Impetigo, you may notice the following
                symptoms:
                <br />
                <br /> <span>Blisters and Rash: </span> Bumps that evolve into
                blisters, surrounded by a rash.
                <br /> <span>Crusting:</span>Yellow discharge that dries to form
                a "golden" or "honey-coloured" crust.
                <br /> <span>Affected Areas: </span>Commonly affects the face,
                arms, or legs.
              </p>
              <a
                className="button"
                href="https://citypharmacy.medmeapp.ca/schedule/groups/minorAilments?appointmentType=Impetigo&province=ON"
                target="blank">
                Book Now
              </a>
            </div>
            <div className="whitebox">
              <img src={MinorAliments12} alt="image" />
              <p className="header">Insect bites and urticaria (hives)</p>
              <p className="note">
                When experiencing insect bites and hives, you may notice the
                following symptoms: <br />
                <br /> <span>Bumps and Blisters:</span>Presence of small bumps
                or blisters, often accompanied by pain, itching, redness, or
                swelling.
                <br /> <span>Burning Sensation:</span>A sharp, burning pain that
                can feel like a sting.
              </p>
              <a
                className="button"
                href="https://citypharmacy.medmeapp.ca/schedule/groups/minorAilments?appointmentType=InsectBites&province=ON"
                target="blank">
                Book Now
              </a>
            </div>
          </div>
          <div className="boxesWrap">
            <div className="whitebox">
              <img src={MinorAliments13} alt="image" />
              <p className="header">
                Tick bites, post-exposure prophylaxis to prevent Lyme disease
              </p>
              <p className="note">
                When experiencing tick bites, particularly from black-legged
                ticks, you may notice the following symptoms:
                <br />
                <br /> <span>Tick Bite Identification:</span> A bite typically
                from a black-legged tick.
                <br /> <span>Skin Reactions: </span>Presence of a red lump, with
                potential development of swelling, blistering, bruising,
                itching, or other infections.
                <br /> <span>Allergic Reactions:</span> Mild allergic reactions
                such as hives, rash, and light swelling at the bite site.
              </p>
              <a
                className="button"
                href="https://citypharmacy.medmeapp.ca/schedule/groups/minorAilments?appointmentType=TickBites&province=ON"
                target="blank">
                Book Now
              </a>
            </div>
            <div className="whitebox">
              <img src={MinorAliments14} alt="image" />
              <p className="header">Musculoskeletal sprains and strains</p>
              <p className="note">
                If you're experiencing muscle aches, particularly from sprains
                and strains, look out for these symptoms:
                <br />
                <br /> <span>Pain and Tenderness: </span> Varying levels of
                pain, swelling, or tenderness, ranging from light to medium
                intensity.
                <br /> <span>Visible Changes:</span>Presence of redness or
                bruising on the affected area.
                <br /> <span>Movement Limitation: </span>Experiencing limited
                motion and muscle weakness.
                <br /> <span>Injury Context: </span>The injury is often
                associated with overworking or direct injury to a muscle or
                joint.
              </p>
              <a
                className="button"
                href="https://citypharmacy.medmeapp.ca/schedule/groups/minorAilments?appointmentType=MuscleAches&province=ON"
                target="blank">
                Book Now
              </a>
            </div>
            <div className="whitebox">
              <img src={MinorAliments15} alt="image" />
              <p className="header">Nausea and vomiting of pregnancy</p>
              <p className="note">
                If you're experiencing morning sickness during pregnancy, be
                aware of these symptoms: <br />
                <br /> <span>Nausea or Vomiting:</span> Occurring at any time of
                the day due to pregnancy.
                <br /> <span>Difficulty with Food and Drink:</span> Inability to
                keep food or drink down for more than 12 hours.
              </p>
              <a
                className="button"
                href="https://citypharmacy.medmeapp.ca/schedule/groups/minorAilments?appointmentType=MorningSickness&province=ON"
                target="blank">
                Book Now
              </a>
            </div>
          </div>
          <div className="boxesWrap">
            <div className="whitebox">
              <img src={MinorAliments16} alt="image" />
              <p className="header">Pinworms and threadworms</p>
              <p className="note">
                Be aware of these symptoms if you suspect an infection with
                threadworms or pinworms:
                <br />
                <br /> <span>Worm Detection:</span> Presence of worms in stool
                or near the anus.
                <br /> <span>Anal Itching: </span>Particularly intense at night.
                <br /> <span>Restless Sleep:</span>Discomfort leading to
                disturbed sleep patterns.
                <br /> <span>Vaginal Itching:</span>Occurs if adult worms
                migrate to the vaginal area.
                <br /> <span>Irritability and Concentration Issues:</span>
                Feeling unusually irritable and having difficulty focusing.
                <br /> <span>Intermittent Abdominal Pain:</span>Experiencing
                abdominal pain that appears and disappears.
              </p>
              <a
                className="button"
                href="https://citypharmacy.medmeapp.ca/schedule/groups/minorAilments?appointmentType=Threadworms&province=ON"
                target="blank">
                Book Now
              </a>
            </div>
            <div className="whitebox">
              <img src={MinorAliments17} alt="image" />
              <p className="header">Pink Eye (Conjunctivitis)</p>
              <p className="note">
                Recognize these common symptoms of conjunctivitis:
                <br />
                <br /> <span>Eye Redness: </span>Noticeable redness in one or
                both eyes.
                <br /> <span>Morning Eye Difficulty:</span>Challenges in opening
                eyes upon waking, often due to discharge.
                <br /> <span>Discharge from Eye: </span>Presence of sticky or
                watery fluids from the eye.
                <br /> <span>Discomfort: </span>Experiencing mild scratching,
                itching, or burning sensations in the eye.
                <br /> <span>Light Sensitivity: </span>Finding bright lights
                uncomfortable or painful to the eyes.
              </p>
              <a
                className="button"
                target="blank"
                href="https://citypharmacy.medmeapp.ca/schedule/groups/minorAilments?appointmentType=PinkEye&province=ON">
                Book Now
              </a>
            </div>
            <div className="whitebox">
              <img src={MinorAliments18} alt="image" />
              <p className="header">Urinary Tract Infections (UTI)</p>
              <p className="note">
                Be aware of these typical UTI symptoms:
                <br />
                <br /> <span>Frequent Urination:</span> An increased need to
                urinate, often accompanied by pain.
                <br /> <span>Painful Urination:</span>Discomfort or pain during
                urination.
                <br /> <span>Lower Abdominal Pain:</span> Aching or discomfort
                in the lower abdomen.
                <br /> <span>Blood in Urine:</span>Presence of a small amount of
                blood in the urine.
                <br /> <span>No Vaginal Discharge: </span>Not experiencing any
                vaginal discharge.
                <br /> <span>Cloudy Urine: </span>Urine that appears cloudy or
                has a foul smell.
                <br /> <br /> <span>Note: </span>Our pharmacists are equipped to
                assess and prescribe for UTIs in females only.
              </p>
              <a
                className="button"
                href="https://citypharmacy.medmeapp.ca/schedule/groups/minorAilments?appointmentType=UrinaryTractInfection&province=ON"
                target="blank">
                Book Now
              </a>
            </div>
          </div>
          <div className="boxesWrap">
            <div className="whitebox horizontal">
              <div>
                <img src={MinorAliments19} alt="image" />
                <p className="header" style={{ width: "max-content" }}>
                  Vulvovaginal candidiasis <br /> (yeast infection)
                </p>
              </div>
              <div>
                <p className="note">
                  Recognize these common symptoms of a vaginal yeast infection:
                  <br />
                  <br /> <span>Thick, White Discharge:</span>A thick, white,
                  odour-free discharge resembling cottage cheese. Itching and
                  Burning: Itching, burning sensations in the vaginal area.
                  <br /> <span>Itching and Burning: </span>
                  Itching, burning sensations in the vaginal area.
                  <br /> <span>Pain During Urination/Intercourse:</span>{" "}
                  Discomfort or pain during urination and/or sexual intercourse.
                  <br /> <span>Rash and Redness:</span>Rash and redness in the
                  vaginal area, indicating irritation.
                </p>
                <a
                  className="button"
                  href="https://citypharmacy.medmeapp.ca/schedule/groups/minorAilments?appointmentType=YeastInfection&province=ON"
                  target="blank">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <img src={bottm} alt="background" className="bottomImage" />
      </div>
      <div className="SectionThree">
        <div className="wrap">
          <div className="text">
            <p className="subheader">
              Convenient Minor Ailments Consultation Options
            </p>
            <p className="header">OHIP-Covered Assessments</p>
            <p className="note">
              Whether you prefer an in-person visit, a phone call, or a virtual
              consultation from the comfort of your home, we're here to provide
              expert care and advice on your minor ailment.
            </p>
            <p className="greennote">
              Experience personalized healthcare tailored to your lifestyle with
              City Pharmacy.
            </p>
          </div>
          <img src={MinorAliments20} alt="image" className="bottomimg" />
        </div>
        <img src={bg} alt="backdround" className="secondbg" />
      </div>
      <div className="SectionFour">
        <div className="wrap">
          <div className="text">
            <p className="subheader">Our assessment process</p>
            <p className="header">Our Comprehensive Assessment Process</p>
          </div>
          <div className="boxes">
            <div className="box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none">
                <path
                  d="M16.9286 8.02483H12.2143C10.964 8.02483 9.76488 8.52151 8.88078 9.40561C7.99668 10.2897 7.5 11.4888 7.5 12.7391V41.0248C7.5 42.2751 7.99668 43.4742 8.88078 44.3583C9.76488 45.2424 10.964 45.7391 12.2143 45.7391H35.7857C37.036 45.7391 38.2351 45.2424 39.1192 44.3583C40.0033 43.4742 40.5 42.2751 40.5 41.0248V12.7391C40.5 11.4888 40.0033 10.2897 39.1192 9.40561C38.2351 8.52151 37.036 8.02483 35.7857 8.02483H31.0714M16.9286 8.02483C16.9286 6.77453 17.4253 5.57543 18.3094 4.69133C19.1935 3.80723 20.3926 3.31055 21.6429 3.31055H26.3571C27.6074 3.31055 28.8065 3.80723 29.6906 4.69133C30.5747 5.57543 31.0714 6.77453 31.0714 8.02483M16.9286 8.02483C16.9286 9.27514 17.4253 10.4742 18.3094 11.3583C19.1935 12.2424 20.3926 12.7391 21.6429 12.7391H26.3571C27.6074 12.7391 28.8065 12.2424 29.6906 11.3583C30.5747 10.4742 31.0714 9.27514 31.0714 8.02483M23.9836 35.7215L30.4587 29.0862C31.2596 28.2521 31.7069 27.1405 31.7069 25.9842C31.7069 24.8278 31.2596 23.7162 30.4587 22.8822C30.0683 22.4758 29.5998 22.1524 29.0813 21.9316C28.5628 21.7107 28.0051 21.5969 27.4416 21.5969C26.878 21.5969 26.3203 21.7107 25.8018 21.9316C25.2833 22.1524 24.8148 22.4758 24.4244 22.8822L23.9931 23.3253L23.5617 22.8798C23.1713 22.4734 22.7028 22.1501 22.1843 21.9292C21.6658 21.7084 21.1081 21.5945 20.5446 21.5945C19.981 21.5945 19.4233 21.7084 18.9048 21.9292C18.3863 22.1501 17.9178 22.4734 17.5274 22.8798C16.7259 23.7136 16.2783 24.8253 16.2783 25.9818C16.2783 27.1383 16.7259 28.25 17.5274 29.0838L23.9813 35.7427L23.9836 35.7215Z"
                  stroke="#219D50"
                  stroke-width="3.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="title">Prescription Treatments</p>
              <p className="note">
                If deemed appropriate, our pharmacists can prescribe the
                necessary medication tailored to your ailment.
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="11"
              viewBox="0 0 38 11"
              fill="none">
              <path
                d="M27.3327 5.52539C27.3327 8.47091 29.7205 10.8587 32.666 10.8587C35.6115 10.8587 37.9993 8.47091 37.9993 5.52539C37.9993 2.57987 35.6115 0.192057 32.666 0.192057C29.7205 0.192057 27.3327 2.57987 27.3327 5.52539ZM0.666016 6.52539H2.66602V4.52539H0.666016V6.52539ZM6.66602 6.52539H10.666V4.52539H6.66602V6.52539ZM14.666 6.52539H18.666V4.52539H14.666V6.52539ZM22.666 6.52539H26.666V4.52539H22.666V6.52539ZM30.666 6.52539H32.666V4.52539H30.666V6.52539Z"
                fill="#1C5F36"
              />
            </svg>
            <div className="box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49"
                height="49"
                viewBox="0 0 49 49"
                fill="none">
                <path
                  d="M14.666 20.5254V44.5254"
                  stroke="#219D50"
                  stroke-width="3.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M30.666 12.2854L28.666 20.5254H40.326C40.947 20.5254 41.5594 20.67 42.1149 20.9477C42.6703 21.2254 43.1534 21.6286 43.526 22.1254C43.8986 22.6222 44.1504 23.1989 44.2615 23.8098C44.3726 24.4208 44.3399 25.0493 44.166 25.6454L39.506 41.6454C39.2637 42.4763 38.7584 43.2061 38.066 43.7254C37.3736 44.2447 36.5315 44.5254 35.666 44.5254H8.66602C7.60515 44.5254 6.58773 44.104 5.83759 43.3538C5.08744 42.6037 4.66602 41.5863 4.66602 40.5254V24.5254C4.66602 23.4645 5.08744 22.4471 5.83759 21.697C6.58773 20.9468 7.60515 20.5254 8.66602 20.5254H14.186C14.9302 20.525 15.6595 20.317 16.2919 19.9248C16.9244 19.5326 17.4349 18.9718 17.766 18.3054L24.666 4.52539C25.6092 4.53707 26.5375 4.76173 27.3816 5.18258C28.2258 5.60344 28.9639 6.2096 29.5408 6.9558C30.1178 7.70199 30.5186 8.56891 30.7135 9.49179C30.9083 10.4147 30.8921 11.3697 30.666 12.2854Z"
                  stroke="#219D50"
                  stroke-width="3.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="title">Over-the-Counter Recommendations</p>
              <p className="note">
                Sometimes, the best solutions are readily available. We'll guide
                you to effective non-prescription treatments when suitable.
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="11"
              viewBox="0 0 38 11"
              fill="none">
              <path
                d="M27.3327 5.52539C27.3327 8.47091 29.7205 10.8587 32.666 10.8587C35.6115 10.8587 37.9993 8.47091 37.9993 5.52539C37.9993 2.57987 35.6115 0.192057 32.666 0.192057C29.7205 0.192057 27.3327 2.57987 27.3327 5.52539ZM0.666016 6.52539H2.66602V4.52539H0.666016V6.52539ZM6.66602 6.52539H10.666V4.52539H6.66602V6.52539ZM14.666 6.52539H18.666V4.52539H14.666V6.52539ZM22.666 6.52539H26.666V4.52539H22.666V6.52539ZM30.666 6.52539H32.666V4.52539H30.666V6.52539Z"
                fill="#1C5F36"
              />
            </svg>
            <div className="box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none">
                <path
                  d="M7.03516 44.7134V36.5645H15.1842"
                  stroke="#219D50"
                  stroke-width="3.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M44.1616 19.6309C46.1892 30.4136 39.5908 41.1035 28.8176 43.99C20.5722 46.1993 12.1591 43.2273 7.03516 37.0699"
                  stroke="#219D50"
                  stroke-width="3.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.50566 27.4184C0.478029 16.6357 7.07656 5.94589 17.8497 3.05924C26.0946 0.85004 34.5071 3.82142 39.6311 9.97799"
                  stroke="#219D50"
                  stroke-width="3.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M39.6317 2.33789V10.487H31.4824"
                  stroke="#219D50"
                  stroke-width="3.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.2266 17.7751C19.2266 18.3145 19.3328 18.8485 19.5392 19.3468C19.7456 19.8451 20.0481 20.2979 20.4295 20.6793C20.8109 21.0607 21.2637 21.3632 21.762 21.5696C22.2603 21.776 22.7943 21.8823 23.3337 21.8823C23.8731 21.8823 24.4071 21.776 24.9054 21.5696C25.4037 21.3632 25.8565 21.0607 26.2379 20.6793C26.6193 20.2979 26.9218 19.8451 27.1282 19.3468C27.3346 18.8485 27.4409 18.3145 27.4409 17.7751C27.4409 17.2358 27.3346 16.7017 27.1282 16.2034C26.9218 15.7051 26.6193 15.2523 26.2379 14.8709C25.8565 14.4895 25.4037 14.187 24.9054 13.9806C24.4071 13.7742 23.8731 13.668 23.3337 13.668C22.7943 13.668 22.2603 13.7742 21.762 13.9806C21.2637 14.187 20.8109 14.4895 20.4295 14.8709C20.0481 15.2523 19.7456 15.7051 19.5392 16.2034C19.3328 16.7017 19.2266 17.2358 19.2266 17.7751Z"
                  stroke="#219D50"
                  stroke-width="3.75"
                />
                <path
                  d="M15.8027 31.7391C17.0703 28.838 19.9651 26.8105 23.3335 26.8105C26.7019 26.8105 29.5968 28.838 30.8643 31.7391"
                  stroke="#219D50"
                  stroke-width="3.75"
                  stroke-linecap="round"
                />
              </svg>
              <p className="title">Referrals to Physicians</p>
              <p className="note">
                Your well-being is our top priority. If your ailment requires
                specialized attention, we'll promptly refer you to a physician
                for a deeper assessment and investigation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="SectionFive">
        <div className="wrap">
          <div className="text">
            <p className="subheader">Your health journey</p>
            <p className="header">Our Commitment to Your Health</p>
          </div>
          <div className="lowertext">
            <p className="note">
              At City Pharmacy, we don't make recommendations lightly. Every
              suggestion, whether it's a prescription or an over-the-counter
              remedy, stems from our comprehensive assessment.
              <br /> <br />
              Our dedication is to ensure that every prescription issued aligns
              with your unique health needs and is dispensed only when truly
              appropriate.
            </p>
            <div className="greenbox">
              <p className="heading">
                Trust in City Pharmacy's expertise for <br /> a health journey
                tailored just for you.
              </p>
              <button className="button" onClick={() => setshowForm(true)}>
                Book Your Appointment
              </button>
              <img src={bg} alt="backdround" className="secondbg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minoraliments;
