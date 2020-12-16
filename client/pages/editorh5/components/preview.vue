<template>
  <previewWrapper :pageId="pageId" @closePreview="closePreview">
    <p class="page-title paddingL30">页面基础设置</p>
    <div class="preview-info-wrapper">
      <div class="page-info">
        <div class="page-cover">
          <imageCropper :url.sync="pageData.coverImage" />
        </div>
        <div class="page-title-des">
          <div class="info-form-wrapper">
            <div class="info-form-l">标题：</div>
            <div class="info-form-r">
              <el-input v-model="pageData.title" />
            </div>
          </div>
          <div class="info-form-wrapper">
            <div class="info-form-l">描述：</div>
            <div class="info-form-r">
              <el-input type="textarea" :rows="2" v-model="pageData.description" />
            </div>
          </div>
        </div>
      </div>
      <div class="foot-btn-wrapper">
        <el-button type="primary" @click="publishFn">保存并发布</el-button>
        <el-button @click="saveFn">保 存</el-button>
        <el-button @click="closePreview">取 消</el-button>
      </div>
    </div>
  </previewWrapper>
</template>

<script>
import previewWrapper from "./preview-wrapper";
import imageCropper from "@client/components/image-cropper";

export default {
  components: {
    previewWrapper,
    imageCropper
  },
  props: {
    pageId: String,
    pageData: {
      type: Object,
      require: true
    }
  },
  data() {
    return {};
  },
  methods: {
    /**
     * 关闭弹窗事件
     */
    closePreview() {
      this.$emit("closePreview", false);
    },
    publishFn() {
      this.$emit("publishFn");
    },
    saveFn() {
      this.$emit("saveFn");
    }
  }
};
</script>

<style lang="scss" scoped>
.preview-info-wrapper {
  padding: 30px 30px 60px;
}

.page-info {
  display: flex;
  .page-cover {
    width: 120px;
    height: 120px;
    overflow: hidden;
  }
  .page-title-des {
    padding-left: 20px;
    flex: 1;
  }
}

.info-form-wrapper {
  display: flex;
  padding-bottom: 16px;
  .info-form-l {
    line-height: 42px;
    &.com-width {
      width: 120px;
    }
  }
  .info-form-r {
    flex: 1;
    padding-left: 10px;
  }
}

.foot-btn-wrapper {
  position: absolute;
  left: 0;
  bottom: 8px;
  height: 60px;
  padding: 8px 30px;
}

.share-wx-config-wrapper {
  margin-top: 14px;
  padding: 12px;
  background-color: #f0f3f4;
}
</style>
