export enum RabbitMQ {
  TEST_MESSAGE = 'test_message',
  CREATE_USER_COMMAND = 'create_user',
  FIND_USER_BY_EMAIL_COMMAND = 'find_user_by_email',
  GET_ALL_USERS_COMMAND = 'get_all_users',
  GET_CARDS_BY_USER_EMAIL_COMMAND = 'get_cards_by_user_email',
  GET_USER = 'get_user',
}

export enum RMQ_Queue {
  USERS_QUEUE = 'users_queue',
  LEARNING_QUEUE = 'learning_queue',
}
