export const API_URL = 'https://jsonplaceholder.typicode.com/photos';
export const LIMIT = 12;

export const STATUS = {
  processing: {
    label: 'Processing',
    status: 'primary',
    helpText:
      'This bill is currently being processed. it can take approximately 1-2 hours depending on the time of day.',
  },
  scheduled: {
    label: 'Scheduled',
    status: 'warning',
    helpText:
      'The bill is scheduled to be be paid and will be paid on due date. You are in good hands!',
  },
  failed: {
    label: 'Unable to pay',
    status: 'error',
    helpText:
      'This bill was not processed due to some technical reasons. Please contact customer care.',
  },
  paid: {
    label: 'Paid',
    status: 'success',
    helpText: 'This bill has been paid. Enjoy!',
  },
};

export const STATUS_KEYS = Object.keys(STATUS);
