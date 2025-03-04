import { IFieldsListItem, SupportedDBType } from '../../types';
import Fields from './fields';

export const getFields = async (): Promise<IFieldsListItem[]> => {
  return (Object.keys(Fields) as SupportedDBType[]).map((key) => ({
    ...Fields[key],
    name: key
  }));
};
