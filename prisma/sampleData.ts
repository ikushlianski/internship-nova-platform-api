// based on course.prisma
const courses = [
  {
    course_code: 1,
    course_name: 'English for Tech B1+ (regular intensity)',
    course_level_id: 6,
  },
  {
    course_code: 2,
    course_name: 'English for Tech A2 (regular intensity)',
    course_level_id: 3,
  },
  {
    course_code: 3,
    course_name: 'English for Frontend Developers B1+ (regular intensity)',
    course_level_id: 6,
  },
  {
    course_code: 4,
    course_name: 'English for Frontend Developers A2 (regular intensity)',
    course_level_id: 3,
  },
  {
    course_code: 5,
    course_name: 'English for Backend Developers B1+ (regular intensity)',
    course_level_id: 6,
  },
  {
    course_code: 6,
    course_name: 'English for Backend Developers A2 (regular intensity)',
    course_level_id: 3,
  },
  {
    course_code: 7,
    course_name:
      'English for Full-Stack Web Developers B1+ (regular intensity)',
    course_level_id: 6,
  },
  {
    course_code: 8,
    course_name: 'English for Full-Stack Web Developers A2 (regular intensity)',
    course_level_id: 3,
  },
  {
    course_code: 9,
    course_name:
      'English for QA & Automation Engineers B1+ (regular intensity)',
    course_level_id: 6,
  },
  {
    course_code: 10,
    course_name: 'English for QA & Automation Engineers A2 (regular intensity)',
    course_level_id: 3,
  },
  {
    course_code: 11,
    course_name: 'English for HR Generalists B1+ (regular intensity)',
    course_level_id: 6,
  },
  {
    course_code: 12,
    course_name: 'English for HR Generalists A2 (regular intensity)',
    course_level_id: 3,
  },
  {
    course_code: 13,
    course_name: 'English for Project Managers B2+ (regular intensity)',
    course_level_id: 8,
  },
];

const courses_levels = [
  { course_level_id: 1, course_level_name: 'A1', subject_id: 1 },
  { course_level_id: 2, course_level_name: 'A1+', subject_id: 1 },
  { course_level_id: 3, course_level_name: 'A2', subject_id: 1 },
  { course_level_id: 4, course_level_name: 'A2+', subject_id: 1 },
  { course_level_id: 5, course_level_name: 'B1', subject_id: 1 },
  { course_level_id: 6, course_level_name: 'B1+', subject_id: 1 },
  { course_level_id: 7, course_level_name: 'B2', subject_id: 1 },
  { course_level_id: 8, course_level_name: 'B2+', subject_id: 1 },
  { course_level_id: 9, course_level_name: 'C1', subject_id: 1 },
  { course_level_id: 10, course_level_name: 'C1+', subject_id: 1 },
];

const lessons = [
  {
    lesson_id: 1,
    lesson_name: 'Breaking into the tech industry',
    lesson_description: 'Learn how to break into the tech industry',
    lesson_order: 1,
    created_date: '2021-09-01',
    deleted: false,
    section_id: 1,
  },
  {
    lesson_id: 2,
    lesson_name: 'Choosing tech stack',
    lesson_description: 'Learn how to choose a tech stack',
    lesson_order: 2,
    created_date: '2021-10-01',
    deleted: false,
    section_id: 1,
  },
  {
    lesson_id: 3,
    lesson_name: 'Discussing salary',
    lesson_description: 'Learn how to negotiate your salary',
    lesson_order: 3,
    created_date: '2022-01-28',
    deleted: false,
    section_id: 1,
  },
];

const modules = [
  {
    module_id: 1,
    module_name: 'Breaking into tech industry',
    module_description: 'Learn what it is like to work in tech',
    module_order: 1,
    created_date: '2021-09-30',
    deleted: false,
    course_id: 1,
  },
];

const sections = [
  {
    section_id: 1,
    section_name: 'default', // default means the section is not used and is present just to preserve the structure. However, there will be some courses where sections will be used
    section_description: 'default',
    section_order: 1,
    created_date: '2021-09-01',
    deleted: false,
    module_id: 1,
  },
];

const tasks = [
  {
    task_id: 1,
    task_description: 'What kind of Michael Scott are you?', // select a meme that reflects your mood today
    task_type_id: 5,
    task_form_id: 6,
    task_context_id: 'live_lesson',
    task_created_date: new Date(),
    deleted: false,
    lesson_id: 1,
  },
  {
    task_id: 2,
    task_description: 'Read the text and answer the questions',
    task_text:
      'This is a text about the weather. It is raining outside and the weather is cold like in winter. The wind is blowing and the trees are moving. The sky is grey and the clouds are dark. The weather forecast says it will rain all day. What is the weather like today?',
    task_type_id: 3,
    task_form_id: 4,
    task_context_id: 'live_lesson',
    task_created_date: new Date(),
    deleted: false,
    lesson_id: 1,
  },
  {
    task_id: 3,
    task_description: 'What is the capital of France?',
    task_type_id: 7,
    task_context_id: 'live_lesson',
    task_created_date: new Date(),
    deleted: false,
    lesson_id: 1,
  },
  {
    task_id: 4,
    task_description: 'Fill in the gaps',
    task_text:
      'I am a $$1$$ person. I like to $$2$$ every day. We $$3$$ to the cinema every weekend.',
    gap_map: "{ '1': 'happy', '2': 'dance', '3': 'go' }",
    task_type_id: 2,
    task_context_id: 'live_lesson',
    task_created_date: new Date(),
    deleted: false,
    lesson_id: 1,
  },
  // and one test homework task
  {
    task_id: 5,
    task_description: 'What is the capital of Poland?',
    task_type_id: 7,
    task_context_id: 'homework',
    task_created_date: new Date(),
    deleted: false,
    lesson_id: 1,
  },
];

const taskOptions = [
  {
    task_option_id: 1,
    task_id: 3,
    task_option_text: 'A. Belgrade',
    is_correct: false,
  },
  {
    task_option_id: 2,
    task_id: 3,
    task_option_text: 'B. Paris',
    is_correct: true,
  },
  {
    task_option_id: 3,
    task_id: 3,
    task_option_text: 'C. Vienna',
    is_correct: false,
  },
  {
    task_option_id: 4,
    task_id: 5,
    task_option_text: 'A. Warsaw',
    is_correct: true,
  },
  {
    task_option_id: 5,
    task_id: 5,
    task_option_text: 'B. Berlin',
    is_correct: false,
  },
  {
    task_option_id: 6,
    task_id: 5,
    task_option_text: 'C. Prague',
    is_correct: false,
  },
];

const taskForms = [
  {
    task_form_id: 1,
    task_form_name: 'Quiz',
    task_form_description:
      'Quiz tasks where you need to choose one or more correct answers',
  },
  {
    task_form_id: 2,
    task_form_name: 'Fill in the gaps',
    task_form_description:
      'Fill in the gaps where you are given words to insert into the text',
  },
  {
    task_form_id: 3,
    task_form_name: 'Match the pairs',
    task_form_description:
      'Match the pairs where you need to match the words or phrases',
  },
  {
    task_form_id: 4,
    task_form_name: 'True or False',
    task_form_description: 'True or False tasks',
  },
  {
    task_form_id: 6,
    task_form_name: 'Open question',
    task_form_description:
      'Open question tasks where you need to write an answer',
  },
  {
    task_form_id: 7,
    task_form_name: 'Paraphrase the sentence',
    task_form_description:
      'Paraphrase the sentence, e.g. rewrite like a native speaker',
  },
];

const taskTypes = [
  {
    task_type_id: 1,
    task_type_name: 'Grammar',
    task_type_description: 'Grammar tasks',
  },
  {
    task_type_id: 2,
    task_type_name: 'Vocabulary',
    task_type_description: 'Vocabulary tasks',
  },
  {
    task_type_id: 3,
    task_type_name: 'Reading',
    task_type_description: 'Reading tasks',
  },
  {
    task_type_id: 4,
    task_type_name: 'Listening comprehension',
    task_type_description: 'Listening tasks',
  },
  {
    task_type_id: 5,
    task_type_name: 'Speaking',
    task_type_description: 'Speaking tasks',
  },
  {
    task_type_id: 6,
    task_type_name: 'Writing',
    task_type_description: 'Writing tasks',
  },
];

const taskContexts = [
  // when buying a live course + homework + vocabulary
  {
    task_context_id: 'live_lesson',
    task_context_name: 'Live lesson',
    task_context_description: 'Tasks for live lessons with a teacher',
  },
  {
    task_context_id: 'homework',
    task_context_name: 'Homework',
    task_context_description: 'Tasks for homework',
  },
  {
    task_context_id: 'revision',
    task_context_name: 'Revision',
    task_context_description: 'Tasks for revision',
  },
  {
    task_context_id: 'exam',
    task_context_name: 'Exam',
    task_context_description: 'Tasks for exams',
  },

  // when buying a self-study course
  {
    task_context_id: 'self_study',
    task_context_name: 'Self-study',
    task_context_description: 'Tasks for self-study',
  },

  // when providing demo access. Tasks provided only in the demo mode
  {
    task_context_id: 'demo',
    task_context_name: 'Demo',
    task_context_description: 'Tasks for demo access',
  },

  // when providing an assessment test, e.g. learn your English level
  {
    task_context_id: 'assessment',
    task_context_name: 'Assessment',
    task_context_description: 'Tasks for assessment tests',
  },
];

const tuition_languages = [
  {
    tuition_lang_name: 'Русский',
    tuition_lang_code: 'ru',
  },
  {
    tuition_lang_name: 'English',
    tuition_lang_code: 'en',
  },
  {
    tuition_lang_name: 'Polska',
    tuition_lang_code: 'pl',
  },
  {
    tuition_lang_name: 'Українська',
    tuition_lang_code: 'ukr',
  },
];

const subjects = [
  { subject_code: 'english', subject_name: 'English Language' },
  { subject_code: 'programming', subject_name: 'Programming' },
];

export {};
