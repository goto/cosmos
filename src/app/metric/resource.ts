import Metric from '../../models/metric';
import {
  ICreateMetricPayload,
  IMetric,
  IUpdateMetricPayload
} from '../../types';
import * as Transformer from './transformer';

export const list = async (
  query: { meta?: Record<string, string> } = {}
): Promise<IMetric[]> => {
  return Metric.list(query);
};

export const create = async (
  payload: ICreateMetricPayload
): Promise<IMetric> => {
  const data = await Transformer.create(payload);
  return (await Metric.create(data)).toJSON();
};

export const get = async (urn: string): Promise<IMetric | null> => {
  const metric = await Metric.findByUrn(urn);
  return metric?.toJSON() || null;
};

export const update = async (
  urn: string,
  payload: IUpdateMetricPayload
): Promise<IMetric | null> => {
  return Metric.updateByUrn(urn, payload);
};
