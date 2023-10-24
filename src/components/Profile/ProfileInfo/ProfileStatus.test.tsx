import React from "react";
import { ProfileStatus } from './ProfileStatus'
import { create } from 'react-test-renderer'

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status="Lidusikk" updateStatus={() => {}} />)
        const instance = component.getInstance();
        // @ts-ignore
        expect(instance?.state?.status).toBe('Lidusikk')
    });

    test('after creation span with status should be displayed', async () => {
        const component = create(<ProfileStatus status="Lidusik" updateStatus={() => {}} />)
        const root = component.root;
        const span = root.findByType('span')
        // @ts-ignore
        expect(span.length).not.toBe(null)
    })

    test('after creation span should contains correct status', async () => {
        const component = create(<ProfileStatus status="Lidusik" updateStatus={() => {}} />)
        const root = component.root;
        const span = root.findByType('span')
        // @ts-ignore
        expect(span.innerText).toBe("Lidusik" )
    })

})