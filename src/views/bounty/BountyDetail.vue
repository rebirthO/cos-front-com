<script>
import { Steps } from 'ant-design-vue';
import { getBountyDetail } from '@/services';
import Descriptions from '@/components/display/Descriptions';

const { Step } = Steps;

export default {
  data() {
    return {
      detail: {},
      bountyColumns: [
        {
          label: 'Startup',
          value: 'startup.name',
          render: (v, record) => {
            return (
              <router-link to={{ name: 'startupDetail', params: { id: record.id } }}>
                {v}
              </router-link>
            );
          }
        },
        {
          label: 'Type',
          value: 'type'
        },
        {
          label: 'Create by',
          value: '',
          render: (v, record) => {
            return (
              <router-link to={{ name: 'startupDetail', params: { id: record.id } }}>
                {v}
              </router-link>
            );
          }
        },
        {
          label: 'Email',
          value: 'contactEmail',
          render: (v, record) => {
            return <a link={`mailto:${v}`}>{v}</a>;
          }
        },
        {
          label: 'BlockChain',
          value: 'blockAddr',
          copyable: true
        },
        {
          label: 'intro',
          value: 'intro'
        },
        {
          label: 'Desc_IPFS',
          value: 'descriptionFileAddr',
          render: (v, record) => {
            return (
              <a link={v} target="_blank">
                {v}
              </a>
            );
          }
        },
        {
          label: 'Description',
          value: 'descriptionAddr',
          render: (v, record) => {
            return (
              <a link={v} target="_blank">
                {v}
              </a>
            );
          }
        }
      ],
      hunterColumns: [
        {
          dataIndex: 'name',
          customRender: text => <router-link>{text}</router-link>
        },
        {
          dataIndex: 'status',
          customRender: (text, record) => {
            return `${text}(${record.paidAt ||
              record.quitedAt ||
              record.submittedAt ||
              record.startedAt})`;
          }
        }
      ]
    };
  },
  async mounted() {
    this.detail = await getBountyDetail(this.$route.params.id);
  },
  render(h) {
    const { detail } = this;
    return (
      <div style="padding: 28px 50px">
        <div class="f-24 t-bold t-center" style="margin-bottom:48px">
          Bounty Detail
        </div>
        <div class="flex w-100p">
          <div class="flex-1">
            <a-card class="flex-1 detail-card" bordered={false} title={detail.title}>
              <div>
                {(detail.keywords || []).map(tag => (
                  <a-tag class="keyword">{tag}</a-tag>
                ))}
              </div>
              <Descriptions class="mt-32" columns={this.bountyColumns} dataSource={detail} />
            </a-card>
            <a-card bordered={false} class="hunter-card">
              <div slot="title">
                <span>Hunter</span>
                <span class="ml-8 t-primary f-15">{detail.hunters?.length || 0}</span>
              </div>
              <a-table
                pagination={false}
                showHeader={false}
                columns={this.hunterColumns}
                dataSource={detail.hunters || []}
              />
            </a-card>
          </div>
          <a-card class="right">
            <div class="flex ai-center jc-center">
              {(detail.payments || []).map(payment => (
                <span class="mx-24 pay-item f-18 t-bold">
                  {payment.value}
                  {payment.token}
                </span>
              ))}
            </div>
            <div class="mt-24">
              <Steps current={0} labelPlacement="vertical">
                <Step title="Open" sub-title="2020-06-02 12:00" />
                <Step title="InProgress" />
                <Step title="Closed" description="90 days left" />
              </Steps>
            </div>
            <a-button class="my-32" type="primary" block size="large">
              Start Work
            </a-button>
            <ul class="pl-16 t-grey ">
              <li>
                Solid understanding of the blockchain industry. Your current industry relationships
                and resources are encouraged to build Aurora collaboratio.
              </li>
              <li class="mt-16">
                Solid understanding of the blockchain industry. Your current industry relationships
                and resources are encouraged to build Aurora collaboratio.
              </li>
            </ul>
          </a-card>
        </div>
      </div>
    );
  }
};
</script>

<style lang="less" scoped>
@import '~@/assets/styles/variables.less';
.detail-card {
  /deep/ .ant-card-head {
    border-bottom: none;
  }
  /deep/ .ant-card-head-title {
    font-size: 18px;
    font-weight: bold;
  }
}
.hunter-card {
  /deep/ .ant-card-head {
    border-bottom: none;
  }
}
.keyword {
  height: 28px;
  line-height: 28px;
  background: #f3f3f3;
  color: @primary-color;
  & + & {
    margin-left: 10px;
  }
}
.right {
  width: 380px;
  margin-left: 20px;
}
.pay-item {
  &:first-child {
    color: @primary-color;
  }
  &:nth-child(2) {
    color: #ffad4d;
  }
}
/deep/ .ant-steps-item-subtitle {
  font-size: 12px;
}
</style>