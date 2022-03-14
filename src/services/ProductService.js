class ProductService {
  static productList = [
    {
      SNo: 'A001',
      Image:
        'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2_a25aff7a-b5c4-4565-a111-6e1ce2d5b5f0.png?v=1624268771',
      name: 'watch1',
      Price: 1500,
      Qty: 13,
      Total: '',
    },
    {
      SNo: 'A002',
      Image:
        'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2_a25aff7a-b5c4-4565-a111-6e1ce2d5b5f0.png?v=1624268771',
      name: 'watch2',
      Price: 1700,
      Qty: 3,
      Total: '',
    },
    {
      SNo: 'A003',
      Image:
        'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2_a25aff7a-b5c4-4565-a111-6e1ce2d5b5f0.png?v=1624268771',
      name: 'watch3',
      Price: 1600,
      Qty: 0,
      Total: '',
    },
    {
      SNo: 'A004',
      Image:
        'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2_a25aff7a-b5c4-4565-a111-6e1ce2d5b5f0.png?v=1624268771',
      name: 'watch4',
      Price: 1700,
      Qty: 5,
      Total: '',
    },
    {
      SNo: 'A005',
      Image:
        'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2_a25aff7a-b5c4-4565-a111-6e1ce2d5b5f0.png?v=1624268771',
      name: 'watch5',
      Price: 1800,
      Qty: 25,
      Total: '',
    },
  ];

  static getAllProducts() {
    return this.productList;
  }
}

export default ProductService;
