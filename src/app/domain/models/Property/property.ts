
export class Property {
    title!: string;
    city!: number;
    zone!: number;
    propertyType!: number;
    businessType!: number;
    mainImage!: string;
    images!: string[];
    ownerId!: string;
    value!: number;
    shortDescription!: string;
    description!: string;
    status!: number;
}

export class PropertyResponse {
    property!: Property;
}

export class PropertiesResponse {
    properties!: Property[];
}
