import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser as updateUserApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
    const queryClient = useQueryClient();

    const { isLoading: isUpdating, mutate: updateUser } = useMutation({
        mutationFn: updateUserApi,
        onSuccess: () => {
            toast.success("User account was successfully updated");
            //Make the query, specified by the key invalid, so that it is fetched by react query
            queryClient.invalidateQueries({ queryKey: ["user"] });
        },
        onError: (error) => toast.error(error.message),
    });

    return { isUpdating, updateUser };

}