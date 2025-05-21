import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "en",
  name: {
    en: "LAI CHEE HOONG",
    zh: "赖志宏",
  },
  title: {
    en: "Web Developer",
    zh: "网页开发者",
  },
  description: {
    en: `I started learning web development in 2019. I enjoy building modern web apps using Next.js, React, Redux, MongoDB, and Tailwind CSS. I’m also experienced in creating RESTful APIs with Node.js, Express, and Mongoose. I learn from Udemy, Stack Overflow, YouTube, and official docs, and often use ChatGPT, Grok, and DeepSeek to explore and grow. I’m always improving through continuous learning and hands-on practice.`,
    zh: `我于2019年开始学习网页开发。我喜欢使用Next.js、React、Redux、MongoDB和Tailwind CSS构建现代网页应用程序。我还擅长使用Node.js、Express和Mongoose创建RESTful API。我从Udemy、Stack Overflow、YouTube和官方文档中学习，并经常使用ChatGPT、Grok和DeepSeek进行探索和成长。我通过持续学习和实践不断提高自己。`,
  },

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
