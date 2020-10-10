
interface InfluxDBBatchElement {
    measurement: string;
    fields: FieldsObject;
    tags?: TagsObject;
    timestamp?: Date;
}

type FieldsObject = Record<string, unknown>;


type TagsObject = Record<string, unknown>;

export { InfluxDBBatchElement };
