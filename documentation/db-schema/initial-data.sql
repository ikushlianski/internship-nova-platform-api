-- Roles
INSERT INTO public.roles
(role_id, role_name)
VALUES('01HY8M06AJY1J6VCZEX9EYZ490', 'Admin');
INSERT INTO public.roles
(role_id, role_name)
VALUES('01HY8M15TWEWB4WAKJF7Z2V34B', 'Manager');
INSERT INTO public.roles
(role_id, role_name)
VALUES('01HY8M1E76BRQRQ6EK22DT1D7G', 'Mentor');
INSERT INTO public.roles
(role_id, role_name)
VALUES('01HY8M21YZZFP49SSMRWSB41XJ', 'Student');
INSERT INTO public.roles
(role_id, role_name)
VALUES('01HY8M2NTKA6SZGADNV5G59B2B', 'External Developer');
INSERT INTO public.roles
(role_id, role_name)
VALUES('01HY8M23NV5G59B2BSALESROLE', 'Sales');

-- Tuition languages
INSERT INTO public.tuition_languages
(tuition_lang_id, tuition_lang_name, tuition_lang_code)
VALUES('01HY9EVCTXEV9W1Z67YEPS3A2C', 'Русский', 'ru');
INSERT INTO public.tuition_languages
(tuition_lang_id, tuition_lang_name, tuition_lang_code)
VALUES('01HY9EY23SRBH5F0X06TG98WYH', 'English', 'en');
INSERT INTO public.tuition_languages
(tuition_lang_id, tuition_lang_name, tuition_lang_code)
VALUES('01HY9EYDRTKWHP5XD8WCQFYGBK', 'Polska', 'pl');
INSERT INTO public.tuition_languages
(tuition_lang_id, tuition_lang_name, tuition_lang_code)
VALUES('01HY9EZGZ7H141RANT1D8AN6MD', 'Українська', 'ukr');

-- Meeting kinds
INSERT INTO public.meeting_kinds
(meeting_kind_id, meeting_kind_name)
VALUES('01HYH4ZDT0598MM2361GPNCWQ6', 'Q&A session');
INSERT INTO public.meeting_kinds
(meeting_kind_id, meeting_kind_name)
VALUES('01HYH51XP2Y7NE98EN2D2517CE', 'Intro meeting');
INSERT INTO public.meeting_kinds
(meeting_kind_id, meeting_kind_name)
VALUES('01HYH521MX5DNSM5GS6R9APV8Q', 'Graduation meeting');
INSERT INTO public.meeting_kinds
(meeting_kind_id, meeting_kind_name)
VALUES('01HYH524VRN7D0CKJJ0P5ZW091', 'Lab intro meeting');
INSERT INTO public.meeting_kinds
(meeting_kind_id, meeting_kind_name)
VALUES('01HYH5280AYRZMB5V93VWMS0TD', 'Feedback meeting');
INSERT INTO public.meeting_kinds
(meeting_kind_id, meeting_kind_name)
VALUES('01HYH5467E3R6314WVZR1YKS6T', 'English classes');

-- Task types
INSERT INTO public.task_types
(task_type_id, task_type_name)
VALUES('1', 'Multiple choice');
INSERT INTO public.task_types
(task_type_id, task_type_name)
VALUES('2', 'Multi-select');
INSERT INTO public.task_types
(task_type_id, task_type_name)
VALUES('3', 'Gap filling');
INSERT INTO public.task_types
(task_type_id, task_type_name)
VALUES('4', 'Open question');
INSERT INTO public.task_types
(task_type_id, task_type_name)
VALUES('5', 'Spaced repetition');
INSERT INTO public.task_types
(task_type_id, task_type_name)
VALUES('6', 'Word or phrase translation');
INSERT INTO public.task_types
(task_type_id, task_type_name)
VALUES('7', 'Correct mistake');
INSERT INTO public.task_types
(task_type_id, task_type_name)
VALUES('8', 'Debate or discussion');
INSERT INTO public.task_types
(task_type_id, task_type_name)
VALUES('9', 'Discuss video or audio');
INSERT INTO public.task_types
(task_type_id, task_type_name)
VALUES('10', 'Answer questions based on video or audio');
INSERT INTO public.task_types
(task_type_id, task_type_name)
VALUES('11', 'Questions based on text');
INSERT INTO public.task_types
(task_type_id, task_type_name)
VALUES('12', 'Matching');
INSERT INTO public.task_types
(task_type_id, task_type_name)
VALUES('13', 'True or false');
INSERT INTO public.task_types
(task_type_id, task_type_name)
VALUES('14', 'Rephrase like native speaker');

-- Super broad subjects, top level categories
INSERT INTO public.subjects
(subject_id, subject_code, subject_name)
VALUES('1', 'english', 'English Language');
INSERT INTO public.subjects
(subject_id, subject_code, subject_name)
VALUES('2', 'programming', 'Programming');

INSERT INTO aspect_id (aspect_name, subject_id, aspect_description)
VALUES
  ('Parts of Speech', '1', 'Introduces building blocks of sentences (nouns, verbs, etc.)'),
  ('Sentence Structure', '1', 'Focuses on how sentences are formed (subject-verb agreement, types)'),
  ('Tenses', '1', 'Covers verb tenses used to express time (present, past, future)'),
  ('Articles', '1', 'Explains definite and indefinite articles ("the", "a", "an")'),
  ('Nouns', '1', 'Deeper dive into nouns (countable/uncountable, singular/plural, possessives)'),
  ('Verb Conjugations', '1', 'Explains how verbs change form based on person, number, and tense'),
  ('Modal Verbs', '1', 'Covers modal verbs (can, could, should, etc.) and their uses'),
  ('Phrasal Verbs', '1', 'Explores two- or three-word verbs with special meaning'),
  ('Gerunds & Infinitives', '1', 'Explains verb forms used as nouns or modifiers'),
  ('Pronouns', '1', 'Covers different pronoun types (subject, object, possessive)'),
  ('Adjectives', '1', 'Explains how adjectives modify nouns and pronouns'),
  ('Adverbs', '1', 'Explains how adverbs modify verbs, adjectives, and other adverbs'),
  ('Punctuation', '1', 'Proper use of punctuation marks for clarity and structure'),
  ('Capitalization', '1', 'Rules of using capital letters for proper nouns, beginnings of sentences, etc.'),
  ('Subject-Verb Agreement', '1', 'Ensuring subject and verb forms match in number (singular/plural)'),
  ('Parallelism', '1', 'Using similar grammatical structures for balanced sentences'),
  ('Clauses', '1', 'Explains independent and dependent clauses for forming complex sentences'),
  ('Phrases', '1', 'Covers different types of phrases (prepositional, verb, noun, etc.)'),
  ('Conditionals', '1', 'Expressing different hypothetical situations (if, then)'),
  ('Reported Speech', '1', 'How to report what someone else said'),
  ('Subject-Verb Inversion', '1', 'Reversing subject and verb order in certain situations'),
  ('Voice', '1', 'Using active and passive voice appropriately'),
  ('Collocations', '1', 'Common word pairings and phrases used by native speakers'),
  ('Conjunctions', '1', 'Connecting words and clauses (and, but, or, etc.)'),
  ('Prepositions', '1', 'Words that indicate relationships in time, place, etc. (in, on, at, etc.)'),
  ('Comparatives & Superlatives', '1', 'Forming and using comparative and superlative adjectives'),
  ('Direct & Indirect Questions', '1', 'Forming and using different types of questions'),
  ('Relative Clauses', '1', 'Clauses that provide additional information about a noun')
;
