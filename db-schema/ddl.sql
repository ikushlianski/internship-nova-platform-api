-- public.clients definition

-- Drop table

-- DROP TABLE public.clients;

CREATE TABLE public.clients (
	client_id varchar NOT NULL, -- Company that bought our services
	client_name varchar NOT NULL,
	CONSTRAINT clients_pk PRIMARY KEY (client_id)
);

-- Column comments

COMMENT ON COLUMN public.clients.client_id IS 'Company that bought our services';


-- public.companies definition

-- Drop table

-- DROP TABLE public.companies;

CREATE TABLE public.companies (
	company_id varchar NOT NULL,
	company_name varchar NOT NULL,
	company_location varchar NOT NULL,
	CONSTRAINT companies_pk PRIMARY KEY (company_id)
);


-- public.lessons definition

-- Drop table

-- DROP TABLE public.lessons;

CREATE TABLE public.lessons (
	lesson_id varchar NOT NULL,
	lesson_name varchar NOT NULL,
	CONSTRAINT lessons_pk PRIMARY KEY (lesson_id)
);


-- public.mentors definition

-- Drop table

-- DROP TABLE public.mentors;

CREATE TABLE public.mentors (
	mentor_id varchar NOT NULL,
	user_id varchar NOT NULL,
	mentor_full_name_ru varchar NOT NULL,
	mentor_full_name_en varchar NOT NULL,
	mentor_description_ru varchar NULL,
	mentor_description_en varchar NULL,
	CONSTRAINT mentors_pk PRIMARY KEY (mentor_id)
);


-- public.modules definition

-- Drop table

-- DROP TABLE public.modules;

CREATE TABLE public.modules (
	module_id varchar NOT NULL,
	module_name varchar NOT NULL,
	CONSTRAINT modules_pk PRIMARY KEY (module_id)
);


-- public.paths_levels definition

-- Drop table

-- DROP TABLE public.paths_levels;

CREATE TABLE public.paths_levels (
	path_level_id varchar NOT NULL,
	path_level_name varchar NOT NULL, -- E.g. for English studies this can be "B1", "C1" etc.
	CONSTRAINT paths_levels_pk PRIMARY KEY (path_level_id)
);

-- Column comments

COMMENT ON COLUMN public.paths_levels.path_level_name IS 'E.g. for English studies this can be "B1", "C1" etc.';


-- public.paths_mentors definition

-- Drop table

-- DROP TABLE public.paths_mentors;

CREATE TABLE public.paths_mentors (
	path_id varchar NOT NULL,
	mentor_id varchar NOT NULL
);
COMMENT ON TABLE public.paths_mentors IS 'Default mentors for paths, may be changed once a class is created from path';


-- public.positions definition

-- Drop table

-- DROP TABLE public.positions;

CREATE TABLE public.positions (
	position_id varchar NOT NULL,
	position_name varchar NOT NULL,
	CONSTRAINT positions_pk PRIMARY KEY (position_id)
);


-- public.prizes definition

-- Drop table

-- DROP TABLE public.prizes;

CREATE TABLE public.prizes (
	prize_id varchar NOT NULL,
	prize_name varchar NULL,
	CONSTRAINT prizes_pk PRIMARY KEY (prize_id)
);


-- public.roles definition

-- Drop table

-- DROP TABLE public.roles;

CREATE TABLE public.roles (
	role_id varchar NOT NULL,
	role_name varchar NULL,
	CONSTRAINT roles_pk PRIMARY KEY (role_id)
);


-- public.sections definition

-- Drop table

-- DROP TABLE public.sections;

CREATE TABLE public.sections (
	section_id varchar NOT NULL,
	section_name varchar NOT NULL,
	CONSTRAINT sections_pk PRIMARY KEY (section_id)
);


-- public.student_class_ranking definition

-- Drop table

-- DROP TABLE public.student_class_ranking;

CREATE TABLE public.student_class_ranking (
	student_id varchar NOT NULL,
	class_id varchar NOT NULL,
	points int4 NULL DEFAULT 0
);


-- public.students definition

-- Drop table

-- DROP TABLE public.students;

CREATE TABLE public.students (
	student_id varchar NOT NULL,
	class_id varchar NOT NULL,
	user_id varchar NOT NULL,
	CONSTRAINT students_pk PRIMARY KEY (student_id)
);


-- public.subjects definition

-- Drop table

-- DROP TABLE public.subjects;

CREATE TABLE public.subjects (
	subject_id varchar NOT NULL,
	subject_code varchar NOT NULL,
	subject_name varchar NOT NULL,
	CONSTRAINT subjects_pk PRIMARY KEY (subject_id)
);


-- public.users definition

-- Drop table

-- DROP TABLE public.users;

CREATE TABLE public.users (
	user_id varchar NOT NULL,
	email varchar NULL,
	github_username varchar NULL,
	first_name varchar NULL,
	last_name varchar NULL,
	linkedin_url varchar NULL,
	CONSTRAINT users_pk PRIMARY KEY (user_id),
	CONSTRAINT users_unique UNIQUE (email),
	CONSTRAINT users_unique_1 UNIQUE (github_username)
);


-- public.tuition_languages definition

-- Drop table

-- DROP TABLE public.tuition_languages;

CREATE TABLE public.tuition_languages (
	tuition_lang_id varchar NOT NULL,
	tuition_lang_name varchar NOT NULL,
	tuition_lang_code varchar NOT NULL,
	CONSTRAINT tuition_languages_pk PRIMARY KEY (tuition_lang_id)
);


-- public.companies_users definition

-- Drop table

-- DROP TABLE public.companies_users;

CREATE TABLE public.companies_users (
	user_id varchar NULL,
	company_id varchar NULL,
	position_id varchar NULL,
	CONSTRAINT companies_users_companies_fk FOREIGN KEY (company_id) REFERENCES public.companies(company_id),
	CONSTRAINT companies_users_positions_fk FOREIGN KEY (position_id) REFERENCES public.positions(position_id),
	CONSTRAINT companies_users_users_fk FOREIGN KEY (user_id) REFERENCES public.users(user_id)
);


-- public.paths definition

-- Drop table

-- DROP TABLE public.paths;

CREATE TABLE public.paths (
	subject_id varchar NULL,
	path_id varchar NOT NULL,
	path_name varchar NULL,
	path_level_id varchar NOT NULL,
	path_code varchar NOT NULL, -- Code of the path user internally for automation. E.g. fe-angular-b, meaning frontend angular beginners
	CONSTRAINT path_pk PRIMARY KEY (path_id),
	CONSTRAINT path_paths_levels_fk FOREIGN KEY (path_level_id) REFERENCES public.paths_levels(path_level_id)
);

-- Column comments

COMMENT ON COLUMN public.paths.path_code IS 'Code of the path user internally for automation. E.g. fe-angular-b, meaning frontend angular beginners';


-- public.paths_structures definition

-- Drop table

-- DROP TABLE public.paths_structures;

CREATE TABLE public.paths_structures (
	path_id varchar NOT NULL,
	module_id varchar NOT NULL,
	section_id varchar NULL,
	lesson_id varchar NULL,
	CONSTRAINT paths_structures_lessons_fk FOREIGN KEY (lesson_id) REFERENCES public.lessons(lesson_id),
	CONSTRAINT paths_structures_modules_fk FOREIGN KEY (module_id) REFERENCES public.modules(module_id),
	CONSTRAINT paths_structures_path_fk FOREIGN KEY (path_id) REFERENCES public.paths(path_id),
	CONSTRAINT paths_structures_sections_fk FOREIGN KEY (section_id) REFERENCES public.sections(section_id)
);


-- public.projects definition

-- Drop table

-- DROP TABLE public.projects;

CREATE TABLE public.projects (
	project_id varchar NOT NULL,
	project_code varchar NULL,
	project_name varchar NOT NULL,
	client_id varchar NULL,
	CONSTRAINT projects_pk PRIMARY KEY (project_id),
	CONSTRAINT projects_clients_fk FOREIGN KEY (client_id) REFERENCES public.clients(client_id)
);


-- public.raffles definition

-- Drop table

-- DROP TABLE public.raffles;

CREATE TABLE public.raffles (
	raffle_id varchar NOT NULL,
	prize_id varchar NULL,
	CONSTRAINT raffles_pk PRIMARY KEY (raffle_id),
	CONSTRAINT raffles_prizes_fk FOREIGN KEY (prize_id) REFERENCES public.prizes(prize_id)
);


-- public.user_roles definition

-- Drop table

-- DROP TABLE public.user_roles;

CREATE TABLE public.user_roles (
	user_id varchar NOT NULL,
	role_id varchar NOT NULL,
	CONSTRAINT user_roles_roles_fk FOREIGN KEY (role_id) REFERENCES public.roles(role_id),
	CONSTRAINT user_roles_users_fk FOREIGN KEY (user_id) REFERENCES public.users(user_id)
);


-- public.users_projects definition

-- Drop table

-- DROP TABLE public.users_projects;

CREATE TABLE public.users_projects (
	user_id varchar NOT NULL,
	project_id varchar NOT NULL,
	CONSTRAINT users_projects_projects_fk FOREIGN KEY (project_id) REFERENCES public.projects(project_id),
	CONSTRAINT users_projects_users_fk FOREIGN KEY (user_id) REFERENCES public.users(user_id)
);
CREATE UNIQUE INDEX users_projects_user_id_idx ON public.users_projects USING btree (user_id, project_id);


-- public.classes definition

-- Drop table

-- DROP TABLE public.classes;

CREATE TABLE public.classes (
	class_id varchar NOT NULL,
	class_code varchar NULL, -- Should be generated automatically based on the course (path) code plus date
	path_id varchar NULL,
	start_date varchar NOT NULL,
	end_date varchar NULL,
	tuition_lang_id varchar NOT NULL,
	CONSTRAINT classes_pk PRIMARY KEY (class_id),
	CONSTRAINT classes_paths_fk FOREIGN KEY (path_id) REFERENCES public.paths(path_id),
	CONSTRAINT classes_tuition_languages_fk FOREIGN KEY (tuition_lang_id) REFERENCES public.tuition_languages(tuition_lang_id)
);

-- Column comments

COMMENT ON COLUMN public.classes.class_code IS 'Should be generated automatically based on the course (path) code plus date';


-- public.classes_mentors definition

-- Drop table

-- DROP TABLE public.classes_mentors;

CREATE TABLE public.classes_mentors (
	class_id varchar NOT NULL,
	mentor_id varchar NOT NULL,
	CONSTRAINT classes_mentors_classes_fk FOREIGN KEY (class_id) REFERENCES public.classes(class_id),
	CONSTRAINT classes_mentors_mentors_fk FOREIGN KEY (mentor_id) REFERENCES public.mentors(mentor_id)
);