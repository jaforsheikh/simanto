type AuthError = { message?: string } | null;

export const authClient = {
  signIn: {
    email: async (_data: {
      email: string;
      password: string;
      callbackURL?: string;
      rememberMe?: boolean;
    }): Promise<{ data: null; error: AuthError }> => {
      return { data: null, error: null };
    },
  },

  signUp: {
    email: async (_data: {
      name?: string;
      email: string;
      password: string;
      callbackURL?: string;
    }): Promise<{ data: null; error: AuthError }> => {
      return { data: null, error: null };
    },
  },

  signOut: async (_options?: unknown): Promise<{ data: null; error: AuthError }> => {
    return { data: null, error: null };
  },

  useSession: () => ({
    data: null,
    isPending: false,
    error: null as AuthError,
  }),
};