import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type CarePlanKeySpecifier = ('medications' | 'questionaire' | CarePlanKeySpecifier)[];
export type CarePlanFieldPolicy = {
	medications?: FieldPolicy<any> | FieldReadFunction<any>,
	questionaire?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MedicationKeySpecifier = ('desc' | 'id' | MedicationKeySpecifier)[];
export type MedicationFieldPolicy = {
	desc?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('updateQuestions' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	updateQuestions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('getCarePlan' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	getCarePlan?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QuestionKeySpecifier = ('answer' | 'id' | 'text' | QuestionKeySpecifier)[];
export type QuestionFieldPolicy = {
	answer?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	CarePlan?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CarePlanKeySpecifier | (() => undefined | CarePlanKeySpecifier),
		fields?: CarePlanFieldPolicy,
	},
	Medication?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MedicationKeySpecifier | (() => undefined | MedicationKeySpecifier),
		fields?: MedicationFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Question?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QuestionKeySpecifier | (() => undefined | QuestionKeySpecifier),
		fields?: QuestionFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;