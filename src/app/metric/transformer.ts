import * as Adapter from '../../lib/adapter';
import {
  ICreateMetricPayload,
  ICreateMetricTransformedPayload
} from '../../types';

export async function create(
  data: ICreateMetricPayload
): Promise<ICreateMetricTransformedPayload> {
  return Adapter.urn(data);
}
