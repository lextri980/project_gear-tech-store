import { PaginatorResponseDto } from '@/shared/dto';
import { Response } from 'express';

export const ResponseUtil = {
  /**
   * Return a list/data when status is 200 (OK)
   * @param res - Express response
   * @param data - Response data returned
   * @param message - Response message returned
   * @param paginator - Paginator response returned
   * @returns - JSON resposne with status 200
   */
  success: <T>(
    res: Response,
    data?: T,
    message?: string,
    paginator?: PaginatorResponseDto,
  ) => {
    return res.status(200).json({
      success: true,
      ...(data && { ...data }),
      ...(message && { message }),
      ...(paginator && { ...paginator }),
    });
  },
  /**
   * Return a created resource when status is 201 (Created)
   * @param res - Express response
   * @param data - Response data created
   * @param message - Response message returned
   * @returns - JSON response with status 201
   */
  created: <T>(res: Response, data?: T, message?: string) => {
    return res.status(201).json({
      success: true,
      ...(data && { ...data }),
      ...(message && { message }),
    });
  },
};
