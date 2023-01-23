// .wundergraph/operations/users/get.ts
import { createOperation, z } from "../generated/wundergraph.factory";

export default createOperation.query({
	input: z.object({
		// we define the input of the operation
		content: z.string(),
	}),
	handler: async ({ input }) => {
		return {
            content: input.content,
        }
	},
});
