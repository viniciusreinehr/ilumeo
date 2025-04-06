-- CreateIndex
CREATE INDEX `users_surveys_responses_aux_origin_created_at_idx` ON `users_surveys_responses_aux`(`origin`, `created_at` DESC);
