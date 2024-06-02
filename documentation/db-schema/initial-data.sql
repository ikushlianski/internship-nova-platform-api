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