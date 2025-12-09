import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

export default function TermsPage() {
  const sections = [
    {
      title: '1. 接受条款',
      content: '通过访问和使用S99AU Gaming Blog（以下简称"本网站"），您同意受本使用条款的约束。如果您不同意这些条款，请不要使用本网站。我们保留随时修改这些条款的权利，修改后的条款将在本页面发布后立即生效。'
    },
    {
      title: '2. 服务描述',
      content: '本网站提供在线游戏相关的资讯、评测、策略指南和教育内容。我们不是在线赌场或博彩运营商，不提供真钱游戏服务。本网站的内容仅供信息和娱乐目的。'
    },
    {
      title: '3. 用户资格',
      content: '您必须年满18岁（或您所在司法管辖区的法定成年年龄）才能使用本网站。使用本网站即表示您声明并保证您符合此年龄要求。我们保留随时验证用户年龄的权利。'
    },
    {
      title: '4. 账户注册',
      items: [
        '您必须提供准确、完整和最新的注册信息',
        '您有责任维护账户密码的保密性',
        '您对账户下发生的所有活动负责',
        '如果发现未经授权使用您的账户，请立即通知我们',
        '我们保留拒绝注册或终止账户的权利'
      ]
    },
    {
      title: '5. 用户行为',
      subtitle: '使用本网站时，您同意不会：',
      items: [
        '违反任何适用的法律或法规',
        '侵犯他人的知识产权或其他权利',
        '上传或传播病毒、恶意软件或其他有害代码',
        '进行任何形式的骚扰、威胁或辱骂行为',
        '发布虚假、误导或欺诈性信息',
        '试图未经授权访问网站的任何部分',
        '干扰或破坏网站的正常运行',
        '使用自动化工具（如机器人、爬虫）未经许可收集数据',
        '冒充他人或虚假陈述与他人的关系',
        '从事任何商业活动或广告宣传（未经我们事先书面同意）'
      ]
    },
    {
      title: '6. 内容所有权',
      items: [
        '本网站的所有内容（包括文本、图像、视频、标志、设计）均受版权、商标和其他知识产权法保护',
        '未经我们事先书面许可，您不得复制、修改、分发、展示或以其他方式使用本网站的内容',
        '您可以为个人、非商业目的打印或下载内容的合理副本',
        '任何未经授权的使用可能违反版权法、商标法和其他法律'
      ]
    },
    {
      title: '7. 用户生成内容',
      items: [
        '您可能有机会在本网站上发布评论、评论或其他内容',
        '您保留对您发布内容的所有权，但授予我们使用、修改、展示和分发该内容的非独占、全球性、免版税许可',
        '您声明并保证您拥有发布内容的权利，且内容不侵犯第三方权利',
        '我们保留删除任何违反本条款或我们认为不适当的内容的权利',
        '我们不对用户生成的内容负责'
      ]
    },
    {
      title: '8. 第三方链接',
      content: '本网站可能包含指向第三方网站的链接。这些链接仅为方便而提供，我们不对这些网站的内容、隐私政策或做法负责。访问第三方网站的风险由您自行承担。'
    },
    {
      title: '9. 免责声明',
      items: [
        '本网站及其内容按"原样"和"可用"基础提供，不提供任何明示或暗示的保证',
        '我们不保证网站将不间断、安全或无错误',
        '我们不保证内容的准确性、完整性或及时性',
        '您使用本网站的风险由您自行承担',
        '我们提供的信息仅供参考，不构成专业建议',
        '在线游戏涉及风险，您应该负责任地游戏'
      ]
    },
    {
      title: '10. 责任限制',
      content: '在法律允许的最大范围内，S99AU Gaming Blog及其所有者、员工、合作伙伴和关联公司不对任何直接、间接、偶然、特殊、后果性或惩罚性损害负责，包括但不限于利润损失、数据丢失或业务中断，即使我们已被告知此类损害的可能性。'
    },
    {
      title: '11. 赔偿',
      content: '您同意赔偿、辩护并使S99AU Gaming Blog及其所有者、员工、合作伙伴和关联公司免受因您违反本条款、侵犯第三方权利或使用本网站而产生的任何索赔、损害、义务、损失、责任、成本或债务以及费用（包括但不限于律师费）的损害。'
    },
    {
      title: '12. 终止',
      content: '我们保留随时以任何理由暂停或终止您访问本网站的权利，恕不另行通知。终止后，您必须立即停止使用本网站。本条款中性质上应在终止后继续有效的条款（如所有权、免责声明、责任限制）将继续有效。'
    },
    {
      title: '13. 适用法律',
      content: '本条款受马来西亚法律管辖并根据其解释，不考虑其法律冲突原则。您同意马来西亚法院对因本条款或使用本网站而产生的任何争议拥有专属管辖权。'
    },
    {
      title: '14. 争议解决',
      content: '如果您对本网站有任何争议或投诉，请首先通过本页底部的联系方式与我们联系。我们将尽力友好解决问题。如果无法达成解决方案，争议将通过仲裁或诉讼解决。'
    },
    {
      title: '15. 可分割性',
      content: '如果本条款的任何条款被认定为无效或不可执行，该条款将被删除，其余条款将继续完全有效。'
    },
    {
      title: '16. 完整协议',
      content: '本条款构成您与S99AU Gaming Blog之间关于使用本网站的完整协议，并取代所有先前或同期的协议、理解和通信。'
    },
    {
      title: '17. 联系信息',
      content: '如果您对本使用条款有任何疑问，请通过以下方式联系我们：',
      contact: {
        email: 'legal@e99gaming.com',
        phone: '+60 3-1234-5678',
        address: 'Kuala Lumpur, Malaysia'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">使用条款</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              使用 S99AU Gaming Blog 前请仔细阅读以下条款
            </p>
            <p className="text-sm text-gray-500 mt-4">
              最后更新日期：2024年1月1日
            </p>
          </div>

          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <div className="max-w-4xl mx-auto space-y-12">
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. 接受条款</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  欢迎使用 S99AU Gaming Blog（以下简称"本网站"或"我们"）。通过访问或使用本网站，您同意受本使用条款（以下简称"条款"）的约束。如果您不同意这些条款，请不要使用本网站。
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  我们保留随时修改这些条款的权利。修改后的条款将在本页面上发布，并在发布时立即生效。您继续使用本网站即表示您接受修改后的条款。
                </p>
              </section>

              {sections.map((section, index) => (
                <div key={index} className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                  {section.subtitle && (
                    <p className="text-gray-700 font-semibold mb-3">{section.subtitle}</p>
                  )}
                  {section.content && (
                    <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>
                  )}
                  {section.items && (
                    <ul className="space-y-2 ml-6 mb-4">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700 leading-relaxed">
                          <i className="ri-checkbox-circle-fill text-amber-600 mr-2"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.contact && (
                    <ul className="space-y-2 ml-6 mt-4">
                      <li className="text-gray-700 flex items-center">
                        <i className="ri-mail-line text-amber-600 text-xl mr-3"></i>
                        <span>电子邮件：{section.contact.email}</span>
                      </li>
                      <li className="text-gray-700 flex items-center">
                        <i className="ri-phone-line text-amber-600 text-xl mr-3"></i>
                        <span>电话：{section.contact.phone}</span>
                      </li>
                      <li className="text-gray-700 flex items-center">
                        <i className="ri-map-pin-line text-amber-600 text-xl mr-3"></i>
                        <span>地址：{section.contact.address}</span>
                      </li>
                    </ul>
                  )}
                </div>
              ))}

              <div className="mt-12 p-6 bg-red-50 rounded-xl border-2 border-red-200">
                <h3 className="text-xl font-bold text-red-900 mb-3 flex items-center">
                  <i className="ri-alert-line text-2xl mr-2"></i>
                  重要提示
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  在线游戏可能涉及财务风险。请负责任地游戏，只使用您能够承受损失的资金。如果您或您认识的人有赌博问题，请寻求专业帮助。本网站提供的信息仅供教育和娱乐目的，不构成投资或游戏建议。
                </p>
              </div>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">12. 联系信息</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  如果您对本使用条款有任何疑问或意见，请通过以下方式联系我们：
                </p>
                <div className="bg-amber-50 rounded-xl p-6 space-y-3">
                  <p className="text-gray-700">
                    <strong>网站名称：</strong>S99AU Gaming Blog
                  </p>
                  <p className="text-gray-700">
                    <strong>电子邮箱：</strong>legal@s99au.com
                  </p>
                  <p className="text-gray-700">
                    <strong>联系电话：</strong>+60 12-345 6789
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
