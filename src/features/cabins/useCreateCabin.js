import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
    const queryClient = useQueryClient();

    const { isLoading: isCreating, mutate: createCabin } = useMutation({
        mutationFn: createEditCabin,
        onSuccess: () => {
            toast.success("New cabin successfully created");
            //Make the query, specified by the key invalid, so that it is fetched by react query
            queryClient.invalidateQueries({ queryKey: ["cabins"] });
        },
        onError: (error) => toast.error(error.message),
    });

    return { isCreating, createCabin }
}