import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

export default function PrivacyPage() {
  const sections = [
    {
      title: '1. 信息收集',
      content: [
        {
          subtitle: '1.1 我们收集的信息',
          text: '当您使用我们的服务时，我们可能会收集以下信息：',
          list: [
            '个人信息：姓名、电子邮件地址、联系方式',
            '账户信息：用户名、密码（加密存储）',
            '使用数据：浏览历史、阅读偏好、互动记录',
            '技术信息：IP地址、浏览器类型、设备信息、Cookie数据',
            '通信记录：您与我们的客服沟通内容'
          ]
        },
        {
          subtitle: '1.2 信息收集方式',
          text: '我们通过以下方式收集信息：',
          list: [
            '您主动提供的信息（注册、订阅、联系我们）',
            '自动收集的信息（Cookie、日志文件、分析工具）',
            '第三方来源（社交媒体登录、合作伙伴）'
          ]
        }
      ]
    },
    {
      title: '2. 信息使用',
      content: [
        {
          subtitle: '2.1 使用目的',
          text: '我们使用收集的信息用于：',
          list: [
            '提供和改进我们的服务',
            '个性化内容推荐',
            '发送新闻通讯和更新（您可以随时取消订阅）',
            '回应您的询问和提供客户支持',
            '进行数据分析和研究',
            '检测和防止欺诈行为',
            '遵守法律义务'
          ]
        },
        {
          subtitle: '2.2 营销通信',
          text: '在获得您的同意后，我们可能会向您发送营销信息。您可以随时通过邮件中的退订链接或联系我们来取消订阅。'
        }
      ]
    },
    {
      title: '3. 信息共享',
      content: [
        {
          subtitle: '3.1 我们不会出售您的个人信息',
          text: '我们承诺不会向第三方出售、交易或出租您的个人信息。'
        },
        {
          subtitle: '3.2 信息共享情况',
          text: '在以下情况下，我们可能会共享您的信息：',
          list: [
            '服务提供商：与帮助我们运营网站的第三方服务提供商（如托管服务、分析工具）',
            '法律要求：遵守法律、法规、法律程序或政府要求',
            '业务转让：在合并、收购或资产出售的情况下',
            '征得同意：在获得您明确同意的其他情况下'
          ]
        }
      ]
    },
    {
      title: '4. Cookie和追踪技术',
      content: [
        {
          subtitle: '4.1 Cookie的使用',
          text: '我们使用Cookie和类似技术来：',
          list: [
            '记住您的偏好设置',
            '分析网站流量和使用模式',
            '提供个性化内容',
            '改善用户体验'
          ]
        },
        {
          subtitle: '4.2 Cookie管理',
          text: '您可以通过浏览器设置管理Cookie偏好。请注意，禁用Cookie可能会影响网站的某些功能。'
        }
      ]
    },
    {
      title: '5. 数据安全',
      content: [
        {
          subtitle: '5.1 安全措施',
          text: '我们采取合理的技术和组织措施来保护您的个人信息：',
          list: [
            'SSL/TLS加密传输',
            '数据加密存储',
            '访问控制和身份验证',
            '定期安全审计',
            '员工培训和保密协议'
          ]
        },
        {
          subtitle: '5.2 数据保留',
          text: '我们只在必要的时间内保留您的个人信息，以实现本政策中所述的目的。当信息不再需要时，我们会安全地删除或匿名化处理。'
        }
      ]
    },
    {
      title: '6. 您的权利',
      content: [
        {
          subtitle: '6.1 数据主体权利',
          text: '根据适用的数据保护法律，您拥有以下权利：',
          list: [
            '访问权：请求访问我们持有的您的个人信息',
            '更正权：请求更正不准确的个人信息',
            '删除权：请求删除您的个人信息',
            '限制处理权：请求限制对您个人信息的处理',
            '数据可携权：请求以结构化、常用和机器可读的格式接收您的数据',
            '反对权：反对处理您的个人信息',
            '撤回同意权：撤回您之前给予的同意'
          ]
        },
        {
          subtitle: '6.2 行使权利',
          text: '要行使这些权利，请通过本页底部的联系方式与我们联系。我们将在合理的时间内回应您的请求。'
        }
      ]
    },
    {
      title: '7. 第三方链接',
      content: [
        {
          subtitle: '',
          text: '我们的网站可能包含指向第三方网站的链接。我们不对这些网站的隐私做法负责。我们建议您在访问这些网站时查看其隐私政策。'
        }
      ]
    },
    {
      title: '8. 儿童隐私',
      content: [
        {
          subtitle: '',
          text: '我们的服务不面向18岁以下的儿童。我们不会故意收集18岁以下儿童的个人信息。如果您认为我们可能持有18岁以下儿童的信息，请联系我们，我们将立即删除。'
        }
      ]
    },
    {
      title: '9. 国际数据传输',
      content: [
        {
          subtitle: '',
          text: '您的信息可能会被传输到您所在国家/地区以外的服务器并在那里进行处理。我们会采取适当措施确保您的数据在传输过程中得到充分保护。'
        }
      ]
    },
    {
      title: '10. 政策更新',
      content: [
        {
          subtitle: '',
          text: '我们可能会不时更新本隐私政策。任何更改将在本页面发布，重大更改将通过电子邮件或网站通知告知您。我们建议您定期查看本政策以了解最新信息。'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">隐私政策</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              S99AU Gaming Blog 重视并保护您的隐私
            </p>
            <p className="text-sm text-gray-500 mt-4">
              最后更新日期：2024年1月1日
            </p>
          </div>

          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <div className="max-w-4xl mx-auto space-y-12">
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. 引言</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  欢迎访问 S99AU Gaming Blog（以下简称"我们"或"本网站"）。我们深知个人信息对您的重要性，并会尽全力保护您的个人信息安全可靠。我们致力于维持您对我们的信任，恪守以下原则，保护您的个人信息：权责一致原则、目的明确原则、选择同意原则、最少够用原则、确保安全原则、主体参与原则、公开透明原则等。
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  本隐私政策适用于您通过任何方式对我们的产品和服务的访问和使用。请您在使用我们的产品或服务前，仔细阅读并充分理解本隐私政策。
                </p>
              </section>

              {sections.map((section, index) => (
                <div key={index} className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="mb-6">
                      {item.subtitle && (
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{item.subtitle}</h3>
                      )}
                      <p className="text-gray-700 leading-relaxed mb-3">{item.text}</p>
                      {item.list && (
                        <ul className="space-y-2 ml-6">
                          {item.list.map((listItem, listIndex) => (
                            <li key={listIndex} className="text-gray-700 leading-relaxed">
                              <i className="ri-checkbox-circle-fill text-amber-600 mr-2"></i>
                              {listItem}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              ))}

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">11. 联系我们</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  如果您对本隐私政策有任何疑问、意见或建议，请通过以下方式与我们联系：
                </p>
                <div className="bg-amber-50 rounded-xl p-6 space-y-3">
                  <p className="text-gray-700">
                    <strong>公司名称：</strong>S99AU Gaming Blog
                  </p>
                  <p className="text-gray-700">
                    <strong>电子邮箱：</strong>privacy@s99au.com
                  </p>
                  <p className="text-gray-700">
                    <strong>联系电话：</strong>+60 12-345 6789
                  </p>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                  我们将在收到您的反馈后15个工作日内回复您的请求。
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
