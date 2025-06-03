import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "en",
  name: {
    en: "LAI CHEE HOONG",
    zh: "赖志宏",
  },
  title: {
    en: "Web Developer, Stock Keeper and Sales",
    zh: "网页开发人员、库存管理员和销售人员",
  },
  description: {
    en: `I began web development in 2019 and enjoy building modern apps with Next.js, React, Redux, MongoDB, and Tailwind CSS. I'm skilled in creating RESTful APIs using Node.js, Express, and Mongoose. I learn from Udemy, Stack Overflow, YouTube, and official docs, and use ChatGPT, Grok, and DeepSeek to enhance my skills through continuous learning and practice.`,
    zh: `我于2019年开始学习网页开发。我喜欢使用Next.js、React、Redux、MongoDB和Tailwind CSS构建现代网页应用程序。我还擅长使用Node.js、Express和Mongoose创建RESTful API。我从Udemy、Stack Overflow、YouTube和官方文档中学习，并经常使用ChatGPT、Grok和DeepSeek进行探索和成长。我通过持续学习和实践不断提高自己。`,
  },
  cardTitle: {
    personalProject: {
      en: "Personal Project",
      zh: "个人项目",
    },
    coursesTraining: {
      en: "Courses & Training",
      zh: "课程与培训",
    },
    education: {
      en: "Education",
      zh: "教育背景",
    },
    developedIn: {
      en: "Developed in",
      zh: "开发于",
    },
    udemyOnlineClass: {
      en: "Udemy Online Class",
      zh: "Udemy 在线课程",
    },
    nationalCentralUniversity: {
      en: "National Central University",
      zh: "国立中央大学",
    },
    yukChoyHighSchool: {
      en: "Yuk Choy High School",
      zh: "霹雳育才独立中学",
    },
    departmentOfElectricalEngineering: {
      en: "Department of Electrical Engineering",
      zh: "电机工程系",
    },
    scienceClass: {
      en: "Science Class",
      zh: "理科班",
    },
    taiwanTaoyuanCity: {
      en: "Taiwan Taoyuan City",
      zh: "台湾桃园市",
    },
    malaysiaIpoh: {
      en: "Malaysia Ipoh",
      zh: "马来西亚怡保市",
    },
    iDidntCompletetheProgram: {
      en: "I didn't complete the program",
      zh: "我没有完成该课程",
    },
    packages: {
      en: "Packages",
      zh: "软件包",
    },
    employmentHistory: {
      en: "Employment History",
      zh: "工作经历",
    },
    salesAdvisor: {
      en: "Sales Advisor",
      zh: "销售顾问",
    },
    owner: {
      en: "Store Owner",
      zh: "店主",
    },
    malaysiaPerakSungaiSiput: {
      en: "Perak Sungai Siput",
      zh: "霹雳和丰",
    },
    euYanSang: {
      en: "Eu Yan Sang",
      zh: "余仁生",
    },
    retailSales: {
      en: "Retail Sales",
      zh: "门市销售",
    },
    stockKeeper: {
      en: "Stock Keeper",
      zh: "库存管理员",
    },
    contactInformation: {
      en: "Contact Information",
      zh: "联系方式",
    },
  }
  

};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
