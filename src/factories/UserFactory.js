export class UserFactory {
  static create(overrides = {}) {
    const timestamp = Date.now();
    return {
      email: `testuser_${timestamp}@test.com`,
      password: `Password123!`,
      ...overrides,
    };
  }

  static createInvalid(overrides = {}) {
    return {
      email: "invalid-email",
      password: "123",
      ...overrides,
    };
  }
}
