import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { DatabaseService } from '../services/database.service';

export const authGuard: CanActivateFn = (route, state) => {
  const dbService = inject(DatabaseService);
  
  return dbService.getUser() !== undefined;
};
