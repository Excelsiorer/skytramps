import { mount } from '@vue/test-utils';
// import cActor from '../../src/components/cActor.vue';
import cActor from '@/components/cActor.vue';

describe('cActor.vue', () => {
  let cActor_Name = 'Актеп';
  let cActor_Description = 'Описание актера';
  let cActor_ActorIndex = 1;
  const wrapper = mount(cActor, {
    propsData: {
      name: cActor_Name,
      description: cActor_Description,
      actorIndex: cActor_ActorIndex
    }
  })

  it('Является экземпляром Vue', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('Передача пропса Имени актера', () => {
    expect(wrapper.props().name).toBe(cActor_Name);
  })
  it('Передача пропса описания актера', () => {
    expect(wrapper.props().description).toBe(cActor_Description);
  })
  it('Передача пропса описания индекса актера', () => {
    expect(wrapper.props().actorIndex).toBe(cActor_ActorIndex);
  })
  it('Вывод имени актера на экран', () => {
    expect(wrapper.find('.actor__name').text()).toContain(cActor_Name);
  })
  it('Вывод описания актера на экран', () => {
    expect(wrapper.find('.actor__description').text()).toContain(cActor_Description);
  })
  it('Проверка класса для фото актера', () => {
    expect(wrapper.find('.actor__photo').classes('actor__photo--actor' + cActor_ActorIndex)).toBe(true);
  })
})
