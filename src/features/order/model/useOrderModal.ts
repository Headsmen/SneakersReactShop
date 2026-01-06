import { useForm } from '@mantine/form';
import { orderSchema, type OrderFormData } from '../../../entities/order';

export const useOrderModal = () => {
  const form = useForm<OrderFormData>({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      city: ''
    },
    validate: (values) => {
      try {
        orderSchema.parse(values);
        return {};
      } catch (error: any) {
        const errors: Record<string, string> = {};
        if (error.issues && Array.isArray(error.issues)) {
          error.issues.forEach((issue: any) => {
            if (issue.path && issue.path.length > 0) {
              const fieldName = issue.path[0];
              if (!errors[fieldName]) {
                errors[fieldName] = issue.message;
              }
            }
          });
        }
        return errors;
      }
    }
  });

  return { form };
};
