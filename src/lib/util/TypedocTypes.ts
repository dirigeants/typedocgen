export interface Typedoc {
	id: number;
	name: string;
	kind: number;
	flags: {};
	originalName: string;
	children: TypedocChild[];
	groups: Group[];
}

export interface TypedocChild {
	id: number;
	name: string;
	kind: number;
	kindString: string;
	flags: GetSignatureFlags;
	originalName: string;
	children: PurpleChild[];
	groups: Group[];
	sources: Source[];
}

export interface PurpleChild {
	id: number;
	name: string;
	kind: number;
	kindString: string;
	flags: GetSignatureFlags;
	comment: ChildComment;
	typeParameter: TypeParameter[];
	children: FluffyChild[];
	groups: Group[];
	sources: Source[];
	extendedTypes: ExtendedType[];
}

export interface FluffyChild {
	id: number;
	name: string;
	kind: number;
	kindString: ChildKindString;
	flags: PurpleFlags;
	sources: Source[];
	type?: ElementTypeElement;
	inheritedFrom?: ExtendedType;
	extendedBy?: ExtendedType[];
	comment?: ChildComment;
	getSignature?: GetSignature[];
	signatures?: ChildSignature[];
}

export interface ChildComment {
	shortText: string;
}

export interface ExtendedType {
	type: ExtendedTypeTypeEnum;
	id?: number;
	name: string;
	typeArguments?: ElementTypeElement[];
}

export enum ExtendedTypeTypeEnum {
	Array = 'array',
	Intrinsic = 'intrinsic',
	Reference = 'reference',
	Reflection = 'reflection',
	TypeParameter = 'typeParameter',
	Union = 'union',
}

export interface ElementTypeElement {
	type: ExtendedTypeTypeEnum;
	name: string;
}

export interface PurpleFlags {
	isExported: boolean;
	isReadonly?: boolean;
	isStatic?: boolean;
	isPublic?: boolean;
}

export interface GetSignature {
	id: number;
	name: string;
	kind: number;
	kindString: string;
	flags: GetSignatureFlags;
	comment: ChildComment;
	type: GetSignatureType;
}

export interface GetSignatureFlags {
	isExported: boolean;
}

export interface GetSignatureType {
	type: ExtendedTypeTypeEnum;
	types: PurpleType[];
}

export interface PurpleType {
	type: TentacledType;
	elements?: ElementTypeElement[];
	name?: TypeName;
}

export enum TypeName {
	K = 'K',
	Null = 'null',
	Undefined = 'undefined',
	V = 'V',
	Void = 'void',
}

export enum TentacledType {
	Intrinsic = 'intrinsic',
	Tuple = 'tuple',
	TypeParameter = 'typeParameter',
}

export enum ChildKindString {
	Accessor = 'Accessor',
	Method = 'Method',
	Property = 'Property',
}

export interface ChildSignature {
	id: number;
	name: string;
	kind: number;
	kindString: SignatureKindString;
	flags: GetSignatureFlags;
	comment?: ChildComment;
	type: FluffyType;
	inheritedFrom?: ExtendedType;
	parameters?: PurpleParameter[];
	typeParameter?: TypeParameter[];
}

export enum SignatureKindString {
	CallSignature = 'Call signature',
}

export interface PurpleParameter {
	id: number;
	name: string;
	kind: number;
	kindString: ParameterKindString;
	flags: FluffyFlags;
	comment?: ParameterComment;
	type: ParameterType;
	defaultValue?: string;
}

export interface ParameterComment {
	text: string;
}

export interface FluffyFlags {
	isExported: boolean;
	isRest?: boolean;
	isOptional?: boolean;
}

export enum ParameterKindString {
	Parameter = 'Parameter',
}

export interface ParameterType {
	type: ExtendedTypeTypeEnum;
	elementType?: ExtendedType;
	name?: string;
	id?: number;
	typeArguments?: ElementTypeElement[];
	declaration?: Declaration;
}

export interface Declaration {
	id: number;
	name: DeclarationName;
	kind: number;
	kindString: DeclarationKindString;
	flags: GetSignatureFlags;
	signatures: DeclarationSignature[];
	sources: Source[];
}

export enum DeclarationKindString {
	TypeLiteral = 'Type literal',
}

export enum DeclarationName {
	Type = '__type',
}

export interface DeclarationSignature {
	id: number;
	name: SignatureName;
	kind: number;
	kindString: SignatureKindString;
	flags: GetSignatureFlags;
	parameters: FluffyParameter[];
	type: ElementTypeElement;
}

export enum SignatureName {
	Call = '__call',
}

export interface FluffyParameter {
	id: number;
	name: string;
	kind: number;
	kindString: ParameterKindString;
	flags: TentacledFlags;
	type: ExtendedType;
}

export interface TentacledFlags {
	isExported: boolean;
	isOptional?: boolean;
}

export interface Source {
	fileName: string;
	line: number;
	character: number;
}

export interface FluffyType {
	type: ExtendedTypeTypeEnum;
	typeArguments?: PurpleType[];
	name?: string;
	id?: number;
	types?: PurpleType[];
	elementType?: ElementTypeElement;
}

export interface TypeParameter {
	id: number;
	name: string;
	kind: number;
	kindString: string;
	flags: GetSignatureFlags;
}

export interface Group {
	title: string;
	kind: number;
	children: number[];
}
