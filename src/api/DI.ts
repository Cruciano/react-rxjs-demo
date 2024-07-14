import { container } from "tsyringe";
import { MockAuthApi } from "./MockAuthApi.ts";

export const registerApiDependencies = () => {
	container.register<MockAuthApi>(MockAuthApi,{ useClass: MockAuthApi});
};
