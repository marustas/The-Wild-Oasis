import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
  const { isLoading: isSigningUp, mutate: signUp } = useMutation({
    mutationFn: signUpApi,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify it from your email address."
      );
    },
  });

  return { isSigningUp, signUp };
}
