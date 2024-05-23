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