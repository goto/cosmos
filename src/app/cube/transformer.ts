import * as Adapter from '../../lib/adapter';
import { ICreateCubePayload, ICreateCubeTransformedPayload } from '../../types';

export async function create(
  data: ICreateCubePayload
): Promise<ICreateCubeTransformedPayload> {
  return Adapter.urn(data);
}
