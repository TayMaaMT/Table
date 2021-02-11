import Tag from './Tag';
export const columns = [
    {
      title: 'NAME',
      dataIndex: 'name',
      key: 'name',
      render: text =>(<><a>{text}</a><div>taymaa@gmailcom</div></>),
    },
    {
      title: 'USER STATUS',
      dataIndex: 'userStatus',
      key: 'user_status',
      render: tags => (<><Tag tags={tags}></Tag><div>Last login: 14/APR/2020</div></>)
    },
    {
      title: 'PAYMENT STATUS',
      key: 'payment_status',
      dataIndex: 'paymentStatus',
      render: tags => (<><Tag tags={tags}></Tag><div>Dued on 15/APR/2020</div></>)
    },
    {
        title: 'AMOUNT',
        dataIndex: 'amount',
        key: 'amount',
        render: text => (<><span>${text}</span><div>USD</div></>),
      },
    {
      title: '',
      key: 'action',
      render: () => (
          <a>view more</a>
      ),
    },
  ];
  