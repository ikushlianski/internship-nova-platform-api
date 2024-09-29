export enum RabbitMQ {
  TEST_MESSAGE = 'test_message',
  CREATE_USER_COMMAND = 'create_user',
  FIND_USER_BY_EMAIL_COMMAND = 'find_user_by_email',
  GET_ALL_USERS_COMMAND = 'get_all_users',
  GET_CARDS_BY_USER_EMAIL_COMMAND = 'get_cards_by_user_email',
  GET_ALL_CLASSES = 'get_all_classes',
  GET_CLASS_BY_ID = 'get_class_by_id',
  CREATE_CLASS = 'create_class',
  DELETE_CLASS_BY_ID = 'delete_class_by_id',
  UPDATE_CLASS_BY_ID = 'update_class_by_id',
  GET_ALL_COURSES = 'get_all_courses',
  GET_COURSE_BY_CODE = 'get_class_by_code',
  CREATE_COURSE = 'create_course',
  DELETE_COURSE_BY_CODE = 'delete_course_by_code',
  UPDATE_COURSE_BY_CODE = 'update_course_by_code',
}

export enum RMQ_Queue {
  USERS_QUEUE = 'users_queue',
  LEARNING_QUEUE = 'learning_queue',
}
