<script>
import BountyList from '@/components/bounty-list/BountyList';
import { getStartUpBounties } from '@/services';

export default {
  props: {
    // startup id
    id: String,
    startup: Object
  },
  data() {
    return {
      total: 0
    };
  },
  render(h) {
    return (
      <div>
        <p class="bounty-total">
          <span>Bounty:</span> <span>{this.total}</span>
        </p>
        <BountyList fetchData={this.fetchData} />
      </div>
    );
  },
  methods: {
    async fetchData(query) {
      const [data, total] = await getStartUpBounties(this.id, query);
      this.total = total;
      return [data, total];
    }
  }
};
</script>

<style lang="less" scoped>
.bounty-total {
  font-size: 15px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  span {
    &:first-child {
      color: #000000;
    }

    &:last-child {
      color: #616fff;
    }
  }
}
</style>
