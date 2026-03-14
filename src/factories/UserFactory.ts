interface User {
  email: string;
  password: string;
}

export class UserFactory {
  static create(overrides: Partial<User> = {}): User {
    const timestamp = Date.now();
    return {
      email: `testuser_${timestamp}@test.com`,
      password: "Password123!",
      ...overrides,
    };
  }

  static createInvalid(overrides: Partial<User> = {}): User {
    return {
      email: "invalid-email",
      password: "123",
      ...overrides,
    };
  }
}
