import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class FilterKeysPipe<T> implements PipeTransform {
  constructor(private readonly type: string[]) {}

  transform(value: any) {
    const filteredValue = {} as T;
    for (const key in value) {
      if (this.type.includes(key)) {
        filteredValue[key] = value[key];
      }
    }

    if (Object.keys(filteredValue).length === 0) {
      throw new BadRequestException(
        'No valid properties found in the payload.',
      );
    }

    return filteredValue;
  }
}
