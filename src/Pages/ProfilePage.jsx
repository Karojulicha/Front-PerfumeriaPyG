/**
 * @license
 * Copyright 2024 Perfumeria P&G
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

import { CardProfile } from "../components/Profile/CardProfile";


export const ProfilePage = (handleCard) => {
  return (
    <div>
      <CardProfile handleCard={handleCard} />
    </div>
  );
};
