import { IsOptional } from 'class-validator';

/**
 * [DTO] Default paginator format of [@Query] in requests
 */
export class PaginatorQueryDto {
  @IsOptional()
  sort?: string;

  @IsOptional()
  page?: string;

  @IsOptional()
  size?: string;

  @IsOptional()
  search?: string;
}

/**
 * [DTO] The response type of paginator returned
 */
export class PaginatorResponseDto {
  @IsOptional()
  page?: number;

  @IsOptional()
  size?: number;

  @IsOptional()
  totalPage?: number;

  @IsOptional()
  totalData?: number;
}
