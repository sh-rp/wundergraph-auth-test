import { createOperation, z } from "../generated/wundergraph.factory";

export default createOperation.query({
	handler: async ({ user, internalClient }) => {
        const result = await internalClient.queries.Op1({content: "Hello World"});
		return {
            content: result.data?.content,
        }
	},
});
