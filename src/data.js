export const pageLinks = [
  { id: 'Home', href: '/', text: 'HOME' },
  {
    id: 'medicalservices',
    href: '/medical_services',
    text: 'MEDICAL SERVICES',
    subLinks: [
      {
        id: 'Comprehensive Head and Neck Center',
        href: '/head_and_neck_center',
        text: 'Head and Neck Center',
      },
      {
        id: 'Advanced Gynecology Surgery Center',
        href: '/advanced_gynecology_surgery_center',
        text: 'Advanced Gynecology Surgery Center',
      },
      {
        id: 'Cardio-Obstetrics Center',
        href: '/cardio_obstetrics_center',
        text: 'Cardio-Obstetrics Center',
      },
    ],
  },
  { id: 'About', href: '/about', text: 'ABOUT' },
  { id: 'Contact', href: '/contact', text: 'CONTACT' },
  { id: 'Search', href: '/search', text: 'SEARCH' },
]

export const advancedTechSidebarLinks = [
  {
    id: '1',
    href: '/advanced_gynecology_surgery_center/what_to_expect_during_your_visit',
    text: 'What To Expect During Your Visit',
  },
  {
    id: '2',
    href: '/advanced_gynecology_surgery_center/common_conditions',
    text: 'Common Conditions',
  },
  {
    id: '3',
    href: '/advanced_gynecology_surgery_center/procedures',
    text: 'Procedures',
  },
]

export const headNeckSidebarLinks = [
  {
    id: '4',
    href: '/head_and_neck/advanced_technology',
    text: 'Advanced Technology',
  },
  {
    id: '5',
    href: '/head_and_neck/meet_our_team',
    text: 'Meet Our Team',
  },
  {
    id: '6',
    href: '/head_and_neck/our_services',
    text: 'Our Services',
  },
  {
    id: '7',
    href: '/head_and_neck/comprehensive_approach',
    text: 'Comprehensive Approach',
  },
  {
    id: '8',
    href: '/head_and_neck/thyroid_program',
    text: 'Thyroid Program',
  },
]

export const cardioSidebarLinks = [
  {
    id: '9',
    href: '/cardio_obstetrics_center/program_objectives',
    text: 'Program Objectives',
  },
  {
    id: '10',
    href: '/cardio_obstetrics_center/meet_our_team',
    text: 'Meet Our Team',
  },
  {
    id: '11',
    href: '/cardio_obstetrics_center/clinical_services_and_treatments',
    text: 'Clinical Services and Treatments',
  },
]

export const breadcrumbLinks = [
  {
    id: 'Sentara EVMS',
    href: '/',
    text: 'Sentara EVMS',
  },
  {
    id: 'Medical Services',
    href: '/medicalservices',
    text: 'Medical Services',
  },
  {
    id: 'About',
    href: '/about',
    text: 'About',
  },
  {
    id: 'Contact',
    href: '/contact',
    text: 'Contact',
  },
  {
    id: 'Search',
    href: '/search',
    text: 'Search',
  },
]

export const appointmentQuestions = [
  {
    id: 'Appointments or questions',
    href: 'tel:%201-888-220-2214',
    text: 'Appointments or questions',
    phone: '201-888-220-2214',
  },
]

export const commonConditionsAccordion = [
  {
    id: 1,
    title: 'Medications',
    paragraphs: [
      {
        id: 'p1',
        paragraphOne:
          'For women who experience occasional pelvic pain or discomfort, a mild, over-the counter anti-inflammatory or pain-killing drug such as Naproxen or ibuprofen often will be effective. More bothersome cases may require stronger drugs available by prescription. Additionally, these medications may also decrease the amount of menstrual bleeding, clotting, and gushing of blood that some women experience.',
      },
      {
        id: 'p2',
        paragraphTwo:
          'Some fibroids are treated with hormones that reduce the amounts of the female hormone estrogen. Doctors believe that fibroids grow best when there are high levels of estrogen.',
      },
      {
        id: 'p3',
        paragraphThree:
          'Birth control pills (oral contraceptives) can be used to treat the bleeding symptoms and menstrual cramps caused by uterine fibroids because they decrease the production of female hormones and prevent ovulation. Birth control pills do not reduce the size of uterine fibroids but often help to regulate menses and decrease the quantity of bleeding and cramps. Rarely do oral contraceptives contribute to the growth of fibroids.',
      },
    ],
  },
  {
    id: 2,
    title:
      'Surgery: Hysterectomy (removal of uterus) vs. Myomectomy (removal of fibroid)',
    paragraphs: [
      {
        id: 'p21',
        paragraphOne:
          'A woman has a number of surgical and less invasive options for treatment of uterine fibroids that can control symptoms, preserve the uterus, and preserve fertility. In the past, a woman with growing uterine fibroids was only considered a candidate for hysterectomy (the surgical removal of the uterus). Performing a hysterectomy in a woman of reproductive age means that she will no longer be able to have children and will not have a menstrual cycle. Today, many women and their doctors are considering other minimally invasive treatment options, which may eliminate symptoms.',
      },
      {
        id: 'p22',
        paragraphTwo:
          'If a fibroid is particularly troublesome, the surgeon often can remove only the tumor, leaving the uterus intact. This procedure is called myomectomy. This is done when a woman wants to be able to have children or wishes to retain her uterus as a personal choice.',
      },
      {
        id: 'p23',
        paragraphThree:
          'There are a number of techniques that can be used to perform a myomectomy. The technique is determined by the size, number, and location of the fibroid(s), and the physician’s surgical expertise. These techniques include:',
        unorderedList: [
          {
            id: 'li1',
            title: 'Hysteroscopic myomectomy',
            text: ', a procedure in which some fibroids are removed through the vagina using a surgical instrument called a hysteroscope (a thin, telescope-like instrument inserted through the cervix and into the uterus). This technique can be employed when the fibroid is within the uterine cavity.',
          },
          {
            id: 'li2',
            title: 'Laparoscopic myomectomy (or robotic myomectomy)',
            text: ', which involves the use of a thin, telescope-like instrument attached to a small video camera called a laparoscope inserted through a tiny incision at the belly button. The surgeon uses specialized surgical instruments inserted through this incision and two or three additional small incisions in the abdomen to remove the fibroids.',
          },
          {
            id: 'li3',
            title: 'Laparotomy',
            text: ', which involves an abdominal incision to remove all fibroids, no matter the size or location of the tumors.',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Uterine Artery Embolization',
    paragraphs: [
      {
        id: 31,
        paragraphOne:
          'This treatment works by decreasing the blood supply to the fibroids, causing them to shrink. This is a minimally invasive procedure performed by an interventional radiologist. Patients are typically able to return home the day after the procedure. There is a reported 42% reduction in volume at 3 months with improvement in bleeding, pain, and urinary symptoms associated with fibroids. Long term failure rates are between 30-40%. At 5 years, 20% of patients require a repeat operation.',
      },
    ],
  },
  {
    id: 5,
    title: 'Radiofrequency Ablation of Fibroids',
    paragraphs: [
      {
        id: 51,
        paragraphOne:
          'This is a new procedures that uses a special probe to deliver energy directly into the fibroid. This procedure is guided by ultrasound at the time of a laparoscopy to identify and treat the individual fibroids. We do not currently offer this procedure.',
      },
    ],
  },
]

export const laparoscopyAccordion = [
  {
    id: 1,
    title: 'What is laparoscopy?',
    paragraphs: [
      {
        id: 'p1',
        paragraph:
          'Laparoscopy is a surgical procedure where a camera is used to look inside the abdomen and pelvis. If there is a condition present that requires surgical treatment. The camera (or laparoscope) can be used to visualize the instruments that are used to remove or repair that abnormal tissue. A diagnostic laparoscopy is commonly performed when a patient has chronic pelvic pain. This helps determine if there are any visible abnormalities in the pelvis. If an abnormality is found, it can often be treated during the same operation.',
      },
      {
        id: 'p2',
        h4: 'What conditions can be treated with laparoscopy?',
        paragraph:
          'Almost any gynecologic procedure that requires surgery can be treated with laparoscopy. Common conditions that are treated are fibroids, endometriosis, ovarian cyst, and pelvic adhesions. Pelvic pain due to these conditions can often be improved with laparoscopy.',
      },
      {
        id: 'p3',
        h4: 'What are the benefits and advantages of laparoscopy over conventional open surgery?',
        paragraph:
          'Patients who undergo a laparoscopic procedure have improved outcomes compared to patients that undergo an open procedure. Patients with laparoscopic procedures have less pain, less blood loss, less time in the hospital, less infections & have a decreased chance of having other complications. Patients also have a quicker recovery and return to their normal activity levels.',
      },
      {
        id: 'p4',
        h4: 'What is the difference between laparoscopy and robotic surgery?',
        paragraph:
          'With conventional laparoscopy the surgeon and assistant stand at the side of the patient to hold the camera and instruments. Robotic surgery is another form of minimally invasive surgery where the surgeon uses a machine to hold and move the instruments and camera. The surgeon uses a console station that is a few feet from the patient to control the instruments and camera. Studies show that the two forms of surgery have similar patient quality outcomes. The decision to perform conventional laparoscoopy or robotic surgery is largely due to surgeon preference and training.',
      },
      {
        id: 'p5',
        h4: 'What are the most common gynecologic procedures that are performed with laparoscopy?',
        paragraph:
          '<strong>Laparoscopic Hysterectomy<strong> : A laparoscopic hysterectomy or TLH is a procedure here your doctor removes the uterus from the pelvis with the assistance of a camera called a laparoscope. Your doctor will use specially designed instruments to cut the attachments of the uterus and cervix from the side of the pelvis and the top of the vagina. The uterus can usually be removed through the vagina. The surgeon can then close the top of the vagina with sutures. Click the link to see other common questions and answers related to laparoscopic hysterectomy.',
      },
    ],
  },
  {
    id: 2,
    title: 'Can I keep my ovaries when I have a hysterectomy?',
    paragraphs: [
      {
        id: 'p21',
        paragraph:
          'Yes. It is common to leave the ovaries at time of hysterectomy and is often recommended.',
      },
      {
        id: 'p22',
        h4: 'When should I consider removing my ovaries at time of hysterectomy?',
        paragraph:
          'If the uterus is too large to be removed through the vagina it may be able to be removed by cutting the uterus into smaller pieces.',
      },
      {
        id: 'p23',
        h4: 'Will I go through menopause after my hysterectomy?',
        paragraph:
          'If you have your ovaries removed at the time of hysterectomy you will experience surgically induced menopause. If you do not remove your ovaries, they will still continue to produce hormones. About 25-30% of women experience some hot flashes and other symptoms after a hysterectomy even though their ovaries are left behind. Almost all of these women have their hot flashes spontaneously resolve within 3 months.',
      },
      {
        id: 'p24',
        h4: 'Will I need to have my cervix removed and would it make a difference?',
        paragraph:
          'A hysterectomy can be performed without removing the cervix however there are several things that the patient and the physician should consider. First, there are several conditions where it is probably better to remove the cervix at the time of hysterectomy. These include women with cervical dysplasia, concerns for endometrial cancer or pre-cancer. Other reasons include patients with chronic pelvic pain, severe endometriosis, and pain with intercourse. The second thing that needs to be considered is how the uterus will be removed. Most women who undergo a laparoscopic or robotic hysterectomy have their uterus removed through the vaginal opening after the cervix is detached from the upper part of the vagina.',
      },
      {
        id: 'p25',
        h4: 'If I decide to keep my cervix, how can my uterus be removed?',
        paragraph:
          'If a patient decides to keep her cervix, the only way to remove the uterus is to make a larger incision on the abdomen or remove the uterus in pieces. Removing the uterus in pieces has become a controversial issue in gynecologic surgery. Currently most experts recommend removing the uterus within a bag and potentially avoid leaving pieces of the uterus behind. The uterus may be able to be removed through the belly button but will likely cause a little more soreness than if the uterus and cervix were to be removed through the vagina.',
      },
      {
        id: 'p26',
        h4: 'What advantage does leaving my cervix behind give me?',
        paragraph:
          'For some women the cervix plays a significant role in sexual arousal and orgasm however this doesn’t seem to be the case for most women. With this in mind, leaving the cervix behind could help maintain some sexual function however studies have shown equal improvement in quality of life and sexual function for patients who have their cervix removed or left behind at the time of hysterectomy. The decision to keep you cervix is a very individualized decision that the patient and doctor should consider the risk and benefits of both procedures.',
      },
      {
        id: 'p27',
        h4: 'Are there any other procedures that I may need or consider at the time of my hysterectomy?',
        paragraph:
          'A vaginal suspension procedure may be considered at the time of hysterectomy. The goal of this procedure is to help prevent future pelvic organ prolapse. Pelvic organ prolapse is a condition where the ligaments that support the uterus, cervix, and vagina become stretched. Patients that undergo hysterectomy may have some degree of asymptomatic prolapse. If patients have symptomatic prolapse or urinary incontinence additional procedures may be considered at the time of hysterectomy.',
      },
    ],
  },
  {
    id: 3,
    title: 'Oophorectomy',
    paragraphs: [
      {
        id: 'p31',
        paragraph:
          'A laparoscopic oophorectomy is a procedure where your doctor removes one or both of your ovaries with laparoscopic instruments. The ovary usually placed in a bag and then removed through the belly button. This procedure is typically performed in women with a very low concern that the ovarian mass could be a cancer. If there is a suspicion that the ovary may contain a cancer, then the procedure is typically performed by a surgeon specially trained in treating patients with gynecologic cancers.',
      },
    ],
  },
  {
    id: 4,
    title: 'Salpingectomy',
    paragraphs: [
      {
        id: 'p41',
        paragraph:
          'A laparoscopic salpingectomy is where your surgeon removes one or both of your fallopian tubes. This is now routinely performed at the time of hysterectomy because there is a belief that this may prevent future cancers that arise from the fallopian tube. Other reasons to perform a salpingectomy are for patients that have abnormal fluid in the tube that cause pain & as a form of permanent birth control. The fallopian tube is also usually removed anytime your ovary is removed. A pregnancy in the tube is another reason to remove the fallopian tube.',
      },
    ],
  },
  {
    id: 5,
    title: 'Ovarian Cystectomy',
    paragraphs: [
      {
        id: 'p51',
        paragraph:
          'An ovarian cyst is a fluid collection within the ovary. If the ovarian cyst does not resolve on its own or has an abnormal growth, then it may require surgical removal. An ovarian cystectomy should only be considered if there is a low concern for cancer. Large cyst can still be removed laparoscopically if there is a very low concern for cancer but may require the cyst to be drained prior to removal of the cyst. You should discuss with your doctor if you would be a good candidate for a cystectomy and the risks and benefits of the procedure. It is not uncommon to decide to remove the entire ovary if the cyst is large and you are not concerned with becoming pregnant.',
      },
    ],
  },
  {
    id: 6,
    title: 'Endometriosis Excision',
    paragraphs: [
      {
        id: 'p61',
        paragraph:
          'Laparoscopic excision of endometriosis is the preferred way to treat surgically treat endometriosis by experts. Although medications can often improve pain associated with endometriosis, surgery may be considered in patient trying to become pregnant or in patients where medications are not effective.',
      },

      {
        id: 'p62',
        h4: 'How will my endometriosis be treated if I have surgery?',
        paragraph:
          'Although some endometriosis can be treated with ablation (heating and destroying of tissue), excision of endometrial implants is often recommended by surgeons who specialize in the treatment of endometriosis. Endometriosis is thought to cause pain by abnormally stimulating the nerves in the pelvis. Endometriosis can involve the ovary, fallopian tubes, or lining of the pelvis. In severe cases of endometriosis, the disease can involve other organs such as the bladder, ureter, colon, or bowel. The goal with the surgical excision of endometriosis is to remove all the disease that is causing your symptoms while at the same time preserving the function of the tissue and organs that are affected. This may require your doctor to tailor the surgical approach to fit your circumstances relating to your symptoms and desire to become pregnant. Although the desire is to remove all the disease that is causing your symptoms, there may be a role for leaving some disease behind to prevent serious surgical complications. Your doctor may decide that an MRI is needed prior to surgery and that a general surgeon or urologist may need to help during the surgery.',
      },
    ],
  },
  {
    id: 7,
    title: 'Laparoscopic Myomectomy',
    paragraphs: [
      {
        id: 'p71',
        paragraph:
          'Fibroids are very common and cause women to have heavy periods, pelvic pressure, and can cause infertility. Fibroid treatment depends on a patient’s symptoms, fibroid location, & fertility concerns. For women who have symptomatic fibroids and a desire to have future children, a myomectomy (removal of fibroid) is often required. Fibroids that are in the uterine muscle or extend into the abdominal cavity require removal through a laparoscopic, robotic, or open approach.',
        paragraphTwo:
          'A laparoscopic approach can be considered depending on the size, number and location of the fibroids. During the procedure an incision is made in the uterus and the fibroid is shelled out of the muscle of the uterus. The incision in the uterus is then closed with suture. The fibroids are then typically removed through the umbilicus. Fibroids that are larger than 3cm often require that they be removed in pieces. This is typically done with a scalpel after the fibroids have been placed inside a bag. For additional information about the removal of fibroids please follow the fibroid tissue extraction link.',
      },
      {
        id: 'p72',
        h4: '2-Port Myomectomy',
        paragraph:
          'A 2-port myomectomy is a specialized surgical technique for patients with fibroids and that have decided to undergo a myomectomy. This technique uses a specialized laparoscopic port that allows multiple instruments to be inserted through the belly button. The addition of another small laparoscopic port in the patient’s lower right side allows the procedure to be completed in a standard fashion while decreasing the size and number of visible scars. This technique was pioneered by SENTARA-EVMS Director of Advanced Gynecologic Surgery, Dr. Joseph L. Hudgens.',
      },
    ],
  },
]
