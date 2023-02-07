import Adebayo from "../assets/images/Adebayo-2.jpg";
import Tinubu from "../assets/images/Bola-Tinubu-2.webp";
import Atiku from "../assets/images/Atiku.webp";
import Dumebi from "../assets/images/Dumebi-Kachikwu.webp";
import Hamza from "../assets/images/Al-Mustapha.webp";
import Kola from "../assets/images/Kola-ABiola.jpg";
import Malik from "../assets/images/MalikYYP.jpg";
import Okudili from "../assets/images/MaziNRM.jpg";
import Sowore from "../assets/images/Sowore.jpg";
import Peter from "../assets/images/peterobi.jpg";
import Umeadi from "../assets/images/Umeadi.jpeg";
import Kwakwanso from "../assets/images/Kwakwanso.jpg";

const noOption = {
  label:'none',
  value: -1
}

export const candidates = [
    {
        name: 'Adebayo Adekunle',
        image: Adebayo,
        party: 'sdp',
    },
    {
        name: 'Bola Tinubu',
        image: Tinubu,
        party: 'apc', 
    },
    {
        name: 'Atiku Abubakar',
        image: Atiku, 
        party: 'pdp',
    },
    {
        name: 'Dumebi Kachikwu',
        image: Dumebi, 
        party: 'adc',
    },
    {
        name: 'Hamza Al-Mustapha',
        image: Hamza,
        party: 'aa',

    },
    {
        name: 'Kola Abiola',
        image: Kola,
        party: 'prp', 
    },
    {
        name: 'Malik Ado-Ibrahim',
        image: Malik,
        party: 'ypp', 
    },
    {
        name: 'Okudili Ayanjike',
        image: Okudili,
        party: 'nrm', 
    },
    {
        name: 'Omoyele Sowore',
        image: Sowore,
        party: 'aac', 
    },
    {
        name: 'Adebayo Adekunle',
        image: Umeadi,
        party: 'sdp', 
    },
    {
        name: 'Rabiu Kwakwanso',
        image: Kwakwanso,
        party: 'nnpp', 
    },
    {
        name: 'Peter Obi',
        image: Peter,
        party: 'lp', 
    },

]

export const categories= [
    { 
      id: "x1",
      name: "General",
      hint: "General questions about the candidates",
      questions: [
        {
          id: "x1",
          text: "Age",
          hint: "Optimal age at which candidates may be expected to bring their best life and political experience to high stress point. ",
          options: [
            {
              label: "40-54",
              value: 3,
            },
            {
              label: "55-64",
              value: 5,
            },
            {
              label: "65-74",
              value: 2,
            },
            {
              label: "75-80",
              value: 1,
            },
          ],
        },
        {
          id: "x15",
          text: "Education",
          hint: "A higher-level of education may suggest ability to process complex ideas while a lower-level of education possed with strong public office experience may present a strong candidate. Prof.degree - Medicine,Law,Engineering and Artichecture.",
          options: [
            {
              label: "Primary Certificate",
              value: 0,
            },
            {
              label: "Secondary Certificate",
              value: 1,
            },
            {
              label: "Bachelor's",
              value: 3,
            },
            {
              label: "Master's and Above",
              value: 5,
            },
            {
              label: "Professional Degree ",
              value: 7,
            },
          ],
        },
        {
          id: "x901",
          text: "National Recognition",
          hint: "Are they true nationalist or sectionalist. Recognition and accceptance across the different regions of the country.",
          options: [
            {
              label: "No recognition",
              value: 0,
            },
            {
              label: "Two regions",
              value: 2,
            },
            {
              label: "Three regions",
              value: 3,
            },
            {
              label: "All regions",
              value: 5,
            },
          ],
        },
      ],
    },
    {
      id: "x2",
      name: "Manifesto",
      hint: "Do they have a well articulated manifesto that resonates and addresses Nigeria’s big issues?",
      questions: [
        {
          id: "x2",
          text: "Recovery Plan",
          hint: "A recovery plan is a plan that is designed to help a country or organization recover from a crisis.",
          options: [
            {
              label: "No recovery plan",
              value: 0,
            },
            {
              label: "Skeletal plan",
              value: 2,
            },
            {
              label: "Comprehensive plan",
              value: 5,
            },
          ],
        },
        {
          id: "x3",
          text: "Economic Plan",
          hint: "An Economic plan is a plan that is designed to help a country or organization recover from a crisis. A recovery plan is a plan that is designed to help a country or organization recover from a crisis.",
          options: [
            {
              label: "No economic plan",
              value: 0,
            },
            {
              label: "Skeletal plan",
              value: 2,
            },
            {
              label: "Comprehensive plan",
              value: 5,
            },
          ],
        },
        {
          id: "x4",
          text: "Security Plan",
          hint: "A security plan is a plan that is designed to help a country or organization recover from a crisis. A recovery plan is a plan that is designed to help a country or organization recover from a crisis.",
          options: [
            {
              label: "No security plan",
              value: 0,
            },
            {
              label: "Skeletal plan",
              value: 2,
            },
            {
              label: "Comprehensive plan",
              value: 5,
            },
          ],
        },
        {
          id: "x5",
          text: "Reconcilatory/ Unification Plan",
          hint: "A reconcilatory plan is a plan that is designed to help a country or organization recover from a crisis. A recovery plan is a plan that is designed to help a country or organization recover from a crisis.",
          options: [
            {
              label: "No reconcilatory plan",
              value: 0,
            },
            {
              label: "Skeletal plan",
              value: 2,
            },
            {
              label: "Comprehensive plan",
              value: 5,
            },
          ],
        },
      ],
    },
    {
      id: "x4",
      name: "Knowledge and Political History",
      hint: "The history and political knowledge of each candidate",
      questions: [
        {
          id: "x1",
          text: "Public office experience",
          hint: "Do they have strong public track record or previous experience in a public office. i.e Have they served in a government office before.",
          options: [
            {
              label: "0-2",
              value: 2,
            },
            {
              label: "3-5",
              value: 3,
            },
            {
              label: "6-10",
              value: 4,
            },
            {
              label: "10+",
              value: 5,
            },
          ],
        },
        {
          id: "x41",
          text: "Performance Record",
          hint: "What did they accomplish while in office? Consider their effectivness while in office irrespective of the duration spent. Is there veriable public record for this?",
          options: [
            {
              label: "Poor",
              value: 0,
            },
            {
              label: "Average",
              value: 2,
            },
            {
              label: "Above Average",
              value: 3,
            },
            {
              label: "Excellent",
              value: 5,
            },
          ],
        },
      ],
    },
    {
      id: "x6",
      name: "Global and Business Exposure",
      hint: "Business or entrepreneurial experience of each candidate",
      questions: [
        {
          id: "x1",
          text: "Entrepreneurial Experience",
          hint: "Number of years managing their own business or other large enterprise",
          options: [
            {
              label: "0-2",
              value: 2,
            },
            {
              label: "3-5",
              value: 3,
            },
            {
              label: "5-10",
              value: 4,
            },
            {
              label: "10+",
              value: 5,
            },
          ],
        },
        {
          id: "x4261",
          text: "Entrepreneurial Record",
          hint: "Do they have success managing their own business? Do they have a track record of many failed businesses or were they able to take a fledgling business and make it profitable?",
          options: [
            {
              label: "Poor",
              value: 2,
            },
            {
              label: "Average",
              value: 3,
            },
            {
              label: "Above Average",
              value: 4,
            },
            {
              label: "Excellent",
              value: 5,
            },
          ],
        },
        {
          id: "x461",
          text: "International Experience",
          hint: "What is their level of exposure with international audiences? Do they have any experience with international audience i.e Speaker at global congresses. Have they done any form of schooling outside Nigeria?",
          options: [
            {
              label: "None",
              value: 0,
            },
            {
              label: "Low",
              value: 2,
            },
            {
              label: "Average",
              value: 3,
            },
            {
              label: "Above Average",
              value: 4,
            },
            {
              label: "Extensive",
              value: 5,
            },
          ],
        },
      ],
    },
    {
      id: "x9",
      name: "Values",
      hint: "Integrity, Marital Status and Moral Values of your preffered candidates",
      questions: [
        {
          id: "x1",
          text: "Integrity and Morality",
          hint: "History of criminal and other charges or convictions any history of corruption in office. Do they have a good reputation to the general public and close associates",
          options: [
            {
              label: "Poor",
              value: 2,
            },
            {
              label: "Average",
              value: 3,
            },
            {
              label: "Above Average",
              value: 4,
            },
            {
              label: "Excellent",
              value: 5,
            },
          ],
        },
        {
          id: "xw1",
          text: "Demonstrates",
          hint: "Do they run or are they involved in charities? Do they give scholarship or offer assistance of any kind.",
          options: [
            {
              label: "Poor",
              value: 2,
            },
            {
              label: "Average",
              value: 3,
            },
            {
              label: "Above Average",
              value: 4,
            },
            {
              label: "Excellent",
              value: 5,
            },
          ],
        },
        {
          id: "x341",
          text: "Marital",
          hint: "Is He/She a committed and devoted Husband or Wife? Is He/She a responsible parent",
          options: [
            {
              label: "Single/Never Married",
              value: 1,
            },
            {
              label: "Divorced",
              value: 3,
            },
            {
              label: "Married/Widowed",
              value: 4,
            },
          ],
        },
      ],
    },
  ];

  categories.forEach(category => {
    category.questions.forEach(question => {
      question.options.unshift(noOption)
    })
  })