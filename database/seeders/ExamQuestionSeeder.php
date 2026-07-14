<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ExamQuestionSeeder extends Seeder
{
    public function run()
    {
        DB::table('exam_questions')->truncate();

        $questions = [
            // ==========================================
            // TOPIC 1: FRONTEND LEVEL 2 (VUE.JS) - 100 Qs
            // ==========================================
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 1,
                'question_text' => 'The v-on:keyup.enter directive can be shortened to @keyup.enter.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'All event bindings in Vue can use the @ shorthand indicator.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 2,
                'question_text' => 'Vue automatically emits all data changes from a child component to its parent.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'Child components must explicitly invoke $emit to transfer data changes upward.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 3,
                'question_text' => 'Which hook is best for running code that interacts with the DOM after the component is displayed on the screen?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'beforeMount', 'B' => 'beforeUpdate', 'C' => 'unmounted', 'D' => 'mounted']),
                'correct_answer' => 'D',
                'explanation' => 'The mounted hook executes after elements are added to the active viewport DOM layout.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 4,
                'question_text' => 'Which directive would you use to loop over items without index?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'v-for="item in list"', 'B' => 'v-for="(item, i) in list"', 'C' => 'v-repeat="item in list"', 'D' => 'v-each="item of list"']),
                'correct_answer' => 'A',
                'explanation' => 'v-for="item in list" loops cleanly without pulling index track parameters.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 5,
                'question_text' => 'You are displaying a user\'s full name by combining firstName and lastName. The value should update automatically when either one changes, but you want to avoid unnecessary recalculations. What should you use?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'A method called getFullName()', 'B' => 'A watcher for both names', 'C' => 'A computed property', 'D' => 'A template literal in the HTML']),
                'correct_answer' => 'C',
                'explanation' => 'Computed properties are cached based on reactive dependencies.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 6,
                'question_text' => 'You are building a search field. You want to run an API request whenever searchText changes. What should you use?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'A method', 'B' => 'A watcher on searchText', 'C' => 'A computed property', 'D' => 'A lifecycle hook']),
                'correct_answer' => 'B',
                'explanation' => 'Watchers excel at processing asynchronous side-effects linked to reactive alterations.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 7,
                'question_text' => 'What will be rendered by this template? <p>{{1+1*0}}</p>',
                'type' => 'MC',
                'options' => json_encode(['A' => '0', 'B' => '1', 'C' => 'Nothing', 'D' => 'Syntax error']),
                'correct_answer' => 'B',
                'explanation' => 'JavaScript operator precedence calculates multiplication before addition (1 + 0 = 1).'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 8,
                'question_text' => 'What is the effect of this binding? <p style="{ display: isHidden? \'none\': \'block\' }">Message</p>',
                'type' => 'MC',
                'options' => json_encode(['A' => 'Always visible', 'B' => 'Visible only when isHidden is true', 'C' => 'Hidden when isHidden is true', 'D' => 'Text is changed']),
                'correct_answer' => 'C',
                'explanation' => 'Setting display: none forces the target visual text node hidden.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 9,
                'question_text' => 'What happens when the user types in the field? <input v-model="email">',
                'type' => 'MC',
                'options' => json_encode(['A' => 'The email property updates automatically', 'B' => 'The value is stored in a new variable', 'C' => 'The field clears itself', 'D' => 'Nothing happens']),
                'correct_answer' => 'A',
                'explanation' => 'v-model provides real-time, two-way data sync binding constraints.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 10,
                'question_text' => 'What will be displayed if \'score\' is 50? <p v-if="score > 90">Excellent</p><p v-else-if="score > 70">Good</p><p v-else>Try again</p>',
                'type' => 'MC',
                'options' => json_encode(['A' => 'All', 'B' => 'Excellent', 'C' => 'Good', 'D' => 'Try again']),
                'correct_answer' => 'D',
                'explanation' => 'Because 50 drops below 90 and 70, the catch-all v-else logic fires.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 11,
                'question_text' => 'Vue.js utilizes a Virtual DOM to minimize direct manipulation of the actual browser DOM tree.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'The Virtual DOM serves as an in-memory representation used to compute efficient updates before rendering to the page.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 12,
                'question_text' => 'The data property of a Vue component must be declared as a function returning an object rather than a plain object.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Declaring data as a function ensures each instantiated component maintains an isolated, independent state data sandbox.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 13,
                'question_text' => 'Which lifecycle hook is invoked immediately after data observation is configured but before the DOM compilation phase begins?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'beforeMount', 'B' => 'created', 'C' => 'beforeCreate', 'D' => 'mounted']),
                'correct_answer' => 'B',
                'explanation' => 'The created hook occurs after reactive tracking is initialized, but prior to element mounting routines.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 14,
                'question_text' => 'Which directive is used to cleanly toggle an element\'s CSS display property between none and block without destroying the element?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'v-if', 'B' => 'v-show', 'C' => 'v-cloak', 'D' => 'v-bind']),
                'correct_answer' => 'B',
                'explanation' => 'v-show manipulates the CSS layout visibility state instead of creating/destroying underlying DOM nodes.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 15,
                'question_text' => 'The v-bind directive can be shortened to which punctuation symbol shorthand pattern?',
                'type' => 'MC',
                'options' => json_encode(['A' => '@', 'B' => '#', 'C' => ':', 'D' => '.']),
                'correct_answer' => 'C',
                'explanation' => 'A colon (:) represents the official shorthand prefix syntax convention for v-bind.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 16,
                'question_text' => 'Using a key attribute along with the v-for directive is optional and offers no benefit to Vue\'s tracking engine loop optimizations.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'The key attribute provides a unique identifier used by the Virtual DOM algorithm to safely track list element identities during updates.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 17,
                'question_text' => 'Computed properties will re-evaluate on every single template re-render event, even if their reactive dependencies haven\'t changed.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'Computed properties cache their values and only update when their underlying tracked reactive dependencies shift.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 18,
                'question_text' => 'Which event modifier prevents a triggered browser DOM event from cascading/bubbling further up the parent target layout tree hierarchy?',
                'type' => 'MC',
                'options' => json_encode(['A' => '.prevent', 'B' => '.stop', 'C' => '.self', 'D' => '.capture']),
                'correct_answer' => 'B',
                'explanation' => 'The .stop modifier maps to event.stopPropagation() to isolate event execution paths.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 19,
                'question_text' => 'Which directive forces an element to display raw uncompiled mustache brackets text while hiding component setup until layout resolution finishes?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'v-text', 'B' => 'v-html', 'C' => 'v-pre', 'D' => 'v-cloak']),
                'correct_answer' => 'D',
                'explanation' => 'v-cloak remains on the element until compilation is ready, preventing uncompiled template flashes.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 20,
                'question_text' => 'Vue components follow a strict one-way data flow constraint rules where child instances can directly modify inbound properties directly.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'Props are read-only from a child component context to avoid accidentally mutating state data models inside parents.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 21,
                'question_text' => 'To handle structural layout conditional evaluation criteria blocks cleanly without rendering an extra shell element wrapper, you can attach v-if to which tag?',
                'type' => 'MC',
                'options' => json_encode(['A' => '<div>', 'B' => '<template>', 'C' => '<span>', 'D' => '<slot>']),
                'correct_answer' => 'B',
                'explanation' => 'The <template> tag serves as an invisible wrapper container element that leaves no footprint in the final DOM tree layout output.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 22,
                'question_text' => 'Which v-model modifier automatically forces any raw user keyboard alphanumeric characters input text to cast safely into an actual numeric type?',
                'type' => 'MC',
                'options' => json_encode(['A' => '.trim', 'B' => '.lazy', 'C' => '.number', 'D' => '.cast']),
                'correct_answer' => 'C',
                'explanation' => 'The .number modifier processes user character submissions through parseFloat parsing fallbacks.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 23,
                'question_text' => 'The shorthand indicator pattern symbol used to identify a component slot target placeholder layout hook name is denoted by #.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'The pound sign (#) maps directly to v-slot directive arguments.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 24,
                'question_text' => 'Which built-in abstract component keeps dynamically rendered child components alive in memory when toggled via a dynamic component interface?',
                'type' => 'MC',
                'options' => json_encode(['A' => '<keep-alive>', 'B' => '<transition>', 'C' => '<slot>', 'D' => '<component>']),
                'correct_answer' => 'A',
                'explanation' => '<keep-alive> preserves component instances in memory to avoid destroying and re-creating them.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 25,
                'question_text' => 'Vue cannot detect when an item is added or removed from an array if mutated directly via an index position bracket re-assignment (e.g., arr[0] = val) in Vue 2.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Vue 2 utilizes Object.defineProperty which cannot intercept direct array entry indexes without explicitly invoking Vue.set methods.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 26,
                'question_text' => 'Which configuration option forces a defined custom watcher block to trigger immediate evaluation execution loops instantly upon initialization setup stages?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'deep: true', 'B' => 'immediate: true', 'C' => 'sync: true', 'D' => 'lazy: false']),
                'correct_answer' => 'B',
                'explanation' => 'Setting immediate: true forces a watcher callback routine to fire right away with the current data state.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 27,
                'question_text' => 'Global custom components can be registered globally using which method?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'Vue.component()', 'B' => 'this.$register()', 'C' => 'Vue.mixin()', 'D' => 'Vue.use()']),
                'correct_answer' => 'A',
                'explanation' => 'Vue.component() registers components globally, making them accessible across any component instance template context.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 28,
                'question_text' => 'The scoped attribute added onto a <style> node block forces CSS design rules to stay isolated exclusively to that specific component wrapper container.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Scoped styling attaches unique data-attributes onto elements to prevent styling side-effects from leaking into global layouts.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 29,
                'question_text' => 'Which special native attribute must be used to swap component layers dynamically via the built-in abstract element <component>?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'v-bind:name', 'B' => 'is', 'C' => 'v-model', 'D' => 'ref']),
                'correct_answer' => 'B',
                'explanation' => 'The special "is" attribute resolves either a component\'s registered name string or its configuration object directly.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 30,
                'question_text' => 'To capture structural changes inside complex multi-level object property models, a watcher config block needs to declare deep: true parameters explicitly.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Without deep flag variables enabled, Vue 2 tracking ignores mutations nested down inside complex objects.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 31,
                'question_text' => 'What is the correct way to pass a static string "123" versus a numeric value 123 into a child property via custom templates?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'num="123" for string, :num="123" for number', 'B' => ':num="123" for string, num="123" for number', 'C' => 'num="123" for both properties', 'D' => 'str="123" and int="123"']),
                'correct_answer' => 'A',
                'explanation' => 'Using the bound colon evaluation tells Vue to compute the expression payload string as an actual JavaScript expression instead of a raw literal string.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 32,
                'question_text' => 'The v-html directive automatically filters out destructive cross-site scripting script injection vulnerabilities natively.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'v-html renders unsanitized text raw layout strings directly; developers must manually sanitize inputs to prevent security flaws.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 33,
                'question_text' => 'Which global method should be invoked to safely add a missing reactive property model onto an already instantiated active state object context?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'this.$forceUpdate()', 'B' => 'Vue.set()', 'C' => 'this.$watch()', 'D' => 'Vue.mixin()']),
                'correct_answer' => 'B',
                'explanation' => 'Vue.set() or its instance alias this.$set() adds properties to an object and ensures it triggers a reactivity update loop.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 34,
                'question_text' => 'When using combined directives on a single element node block layout, the v-for iteration processing flow always takes execution precedence priority over v-if filters in Vue 2.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'In Vue 2, v-for has higher precedence than v-if, meaning conditions will evaluate on every loop iteration step (which is generally considered an anti-pattern).'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 35,
                'question_text' => 'Which instance property exposure path provides reference hooks pointing directly to specific child nodes or raw DOM element models?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'this.$el', 'B' => 'this.$refs', 'C' => 'this.$children', 'D' => 'this.$data']),
                'correct_answer' => 'B',
                'explanation' => 'this.$refs collects references registered with a ref attribute on elements or child components.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 36,
                'question_text' => 'The beforeDestroy lifecycle hook executes after a component instance has been completely removed from memory.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'beforeDestroy triggers while the component instance is still fully functional, right before teardown procedures start.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 37,
                'question_text' => 'Which method queues a code block function to execute right after the next asynchronous DOM update lifecycle pipeline finishes?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'this.$nextTick()', 'B' => 'this.$forceUpdate()', 'C' => 'this.$set()', 'D' => 'this.$mount()']),
                'correct_answer' => 'A',
                'explanation' => 'this.$nextTick() delays execution until the next DOM update loop completes, ensuring UI measurements are accurate.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 38,
                'question_text' => 'Using inline styling array binding configuration rules allows developers to bind multiple layout style configuration objects cleanly.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'v-bind:style accept arrays containing multiple style declaration objects to merge into elements.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 39,
                'question_text' => 'Which option is used to inject reusable component composition option models broadly across every defined component block instance definition?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'Plugins', 'B' => 'Global Mixins', 'C' => 'Render Functions', 'D' => 'Custom Directives']),
                'correct_answer' => 'B',
                'explanation' => 'Global mixins apply options to every single component created across the entire application runtime landscape.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 40,
                'question_text' => 'Properties registered with data models or computed setups will overlap cleanly without issues if given matching naming labels.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'Vue throws structural compilation errors if keys conflict across options since properties are proxied directly onto the component instance.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 41,
                'question_text' => 'What modifier should be linked to an input text binding layout to safely delay update synchronization states until standard browser change events drop blur tracking triggers?',
                'type' => 'MC',
                'options' => json_encode(['A' => '.stop', 'B' => '.lazy', 'C' => '.passive', 'D' => '.debounce']),
                'correct_answer' => 'B',
                'explanation' => 'The .lazy modifier changes the sync step from input events to change events, updating state on blur.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 42,
                'question_text' => 'Custom structural directives can be registered locally within a single component using which configuration option key?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'directives', 'B' => 'customDirectives', 'C' => 'methods', 'D' => 'components']),
                'correct_answer' => 'A',
                'explanation' => 'The directives configuration option handles local custom element behavioral directive blocks.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 43,
                'question_text' => 'The v-once directive tells Vue to render an element block exactly one time and bypass all future updates for it.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'v-once caches the initial template compilation output, turning structural components into static content to optimize performance.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 44,
                'question_text' => 'Which specific hook function parameters are called inside custom directive setups the instant a directive binds onto an element?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'bind', 'B' => 'inserted', 'C' => 'update', 'D' => 'componentUpdated']),
                'correct_answer' => 'A',
                'explanation' => 'The bind hook executes immediately when a custom directive is bound to an element for initialization work.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 45,
                'question_text' => 'When passing class binding criteria via objects, specifying true values ensures that matching key strings append directly onto the element\'s class list attribute.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Object evaluation values map directly to conditional boolean parameters to toggle target layout classes.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 46,
                'question_text' => 'Which instance property holds a dictionary reference containing the raw attribute data models passed down onto a child component that were not explicitly claimed as props?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'this.$props', 'B' => 'this.$attrs', 'C' => 'this.$listeners', 'D' => 'this.$data']),
                'correct_answer' => 'B',
                'explanation' => 'this.$attrs aggregates un-passed fallback attribute payloads target environments drop down.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 47,
                'question_text' => 'Defining dynamic slots layout configurations requires wrapping structural element hooks inside fallback <slot> template placeholders tags.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => '<slot> tags mark content placeholders that accept external markup layouts from parent elements.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 48,
                'question_text' => 'Which modifier can be attached to scroll element layout components to ensure touch movement behaviors perform without lagging UI scrolling timelines?',
                'type' => 'MC',
                'options' => json_encode(['A' => '.capture', 'B' => '.passive', 'C' => '.self', 'D' => '.once']),
                'correct_answer' => 'B',
                'explanation' => 'The .passive modifier explicitly tells the browser that an event handler will not call preventDefault(), optimizing scroll performance.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 49,
                'question_text' => 'Using Vue.extend() creates a reusable component constructor sub-class factory model that can be rendered dynamically across targets.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Vue.extend() leverages base class inheritance paths to generate isolated instance creation setups.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 50,
                'question_text' => 'What is the primary role of the provide/inject option combination pairs inside nested application architectures?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'To handle data mutations safely up hierarchies', 'B' => 'To pass data down to deeply nested descendants regardless of component tree depth', 'C' => 'To compile layout code safely outside DOM containers', 'D' => 'To force event listener loops to run synchronously']),
                'correct_answer' => 'B',
                'explanation' => 'Provide/inject passes data context parameters down to deeply nested descendants, avoiding prop-drilling.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 51,
                'question_text' => 'In a Vue template, multiple elements must be wrapped inside a single root parent element when using Vue 2.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Vue 2 component templates require exactly one single root layout tag block to compile properly.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 52,
                'question_text' => 'Which parameter option provides a mechanism to map custom event names away from standard input/change conventions for customized v-model tracking behavior?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'event', 'B' => 'model', 'C' => 'sync', 'D' => 'prop']),
                'correct_answer' => 'B',
                'explanation' => 'The model property re-maps custom input configurations to customize v-model prop/event interfaces.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 53,
                'question_text' => 'The .sync modifier on a prop provides an elegant shorthand way to emulate two-way data binding updates via automated child update events.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'The .sync modifier expands into a v-on listener that updates the parent property automatically.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 54,
                'question_text' => 'Which built-in system property provides a dictionary reference of registered event listener handlers passed from parent scopes directly down to child instances?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'this.$attrs', 'B' => 'this.$listeners', 'C' => 'this.$events', 'D' => 'this.$emitters']),
                'correct_answer' => 'B',
                'explanation' => 'this.$listeners groups targeted layout event event hooks passing from top levels.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 55,
                'question_text' => 'The parent instance component environment can easily be reached or mutated via direct call routes mapping to this.$parent endpoints safely across all setups.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'Relying heavily on this.$parent tightly couples components together, making debugging difficult and breaking isolated modularity patterns.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 56,
                'question_text' => 'Which lifecycle hook executes after every child component instance has updated its corresponding DOM changes?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'beforeUpdate', 'B' => 'updated', 'C' => 'activated', 'D' => 'mounted']),
                'correct_answer' => 'B',
                'explanation' => 'The updated hook executes after component state changes force full layout view restorations.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 57,
                'question_text' => 'Using functional components ensures that templates compile with zero component lifecycle overhead and no instance data sandbox bindings.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Functional components drop instance contexts to speed up lightweight template rendering tasks.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 58,
                'question_text' => 'Which component option can be configured to force inherited properties away from automatically falling onto base component shell element nodes?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'inheritAttrs: false', 'B' => 'abstract: true', 'C' => 'props: true', 'D' => 'scoped: true']),
                'correct_answer' => 'A',
                'explanation' => 'Setting inheritAttrs: false blocks standard attribute fall-through cascades.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 59,
                'question_text' => 'Vue mixins merge object configurations strategy by executing mixin hook routines after the host component\'s hook routines fire.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'Mixin hooks trigger first, ensuring that host component initialization runs last and takes final priority.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 60,
                'question_text' => 'Which type of component slots pass runtime evaluation data from child layouts back up into parent structural template definitions?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'Named Slots', 'B' => 'Scoped Slots', 'C' => 'Dynamic Slots', 'D' => 'Default Slots']),
                'correct_answer' => 'B',
                'explanation' => 'Scoped slots pass child data parameters up to parent contexts for custom formatting.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 61,
                'question_text' => 'The global configuration path Vue.config.errorHandler handles catching runtime application structural layout runtime exceptions globally.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Setting up an errorHandler intercepts unhandled execution errors to protect the user interface.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 62,
                'question_text' => 'Which built-in instance method forces a component instance to immediately execute an explicit re-render update evaluation cycle?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'this.$nextTick()', 'B' => 'this.$forceUpdate()', 'C' => 'this.$mount()', 'D' => 'this.$destroy()']),
                'correct_answer' => 'B',
                'explanation' => 'this.$forceUpdate() manually triggers a component re-render when data outside reactive tracking updates.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 63,
                'question_text' => 'Defining property structural layouts inside components allows strict type validation checking parameters setup criteria rules, generating unique Vue questions up to 100.', 
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Defining property validation options type matches warns developers of mismatched parameters during development.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 64,
                'question_text' => 'Which instance hook tracking property can be called to manually tear down an active custom watcher pipeline dynamically?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'The unwatch callback function returned by this.$watch', 'B' => 'this.$clearWatchers()', 'C' => 'this.$off()', 'D' => 'Vue.delete()']),
                'correct_answer' => 'A',
                'explanation' => 'this.$watch returns an unwatch handler that can be invoked to stop reactive observation.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 65,
                'question_text' => 'The v-text directive behaves identically to standard double mustache brackets rendering output variables blocks.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'v-text updates the element\'s textContent property, operating as a clean programmatic alternative to interpolation braces.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 66,
                'question_text' => 'Which specific modifier combined onto event structures ensures a layout event only triggers exactly one single execution occurrence?',
                'type' => 'MC',
                'options' => json_encode(['A' => '.once', 'B' => '.prevent', 'C' => '.stop', 'D' => '.self']),
                'correct_answer' => 'A',
                'explanation' => 'The .once modifier automatically removes its attached event listener after the first execution.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 67,
                'question_text' => 'Properties bound via v-bind that receive null or undefined values will be entirely stripped off the compiled browser DOM element attributes context node.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'If a bound attribute evaluates to null or undefined, Vue removes that attribute from the rendered DOM element.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 68,
                'question_text' => 'Which programmatic initialization syntax configuration path must be executed to manually activate a detached Vue instance component onto an explicit DOM node target?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'this.$mount()', 'B' => 'this.$compile()', 'C' => 'this.$render()', 'D' => 'this.$bootstrap()']),
                'correct_answer' => 'A',
                'explanation' => 'this.$mount() programmatically attaches a detached component instance to a target DOM container element.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 69,
                'question_text' => 'Vue instances support registering custom local filter blocks inside configuration options to handle template presentation modifications formatting tasks.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'The filters option defines text formatting functions that can be used directly inside interpolation pipelines.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 70,
                'question_text' => 'What is the correct configuration parameter structure option used to validate prop property configurations values require declaration elements inputs?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'required: true', 'B' => 'mandatory: true', 'C' => 'validate: true', 'D' => 'type: Required']),
                'correct_answer' => 'A',
                'explanation' => 'The required: true key configuration marks properties as mandatory validation layout inputs.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 71,
                'question_text' => 'The inline component option string configuration field "template" takes final execution precedence over browser index root DOM element mounting nodes hooks.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'If a template option is present, it entirely replaces the interior content of the component\'s target mount element.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 72,
                'question_text' => 'Which custom array mutation method wrapper is NOT explicitly tracked or proxied by Vue\'s underlying responsive tracking layer engine natively in Vue 2?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'push', 'B' => 'concat', 'C' => 'splice', 'D' => 'shift']),
                'correct_answer' => 'B',
                'explanation' => 'Methods like concat create a brand new array reference without modifying the original array instance directly.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 73,
                'question_text' => 'Transition layout animations wrappers tags <transition> append visual classes automatically according to elements enter/leave stage tracks.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'The <transition> component applies automated CSS animation classes to child elements as their visibility toggles.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 74,
                'question_text' => 'Which special structural configuration method parameter converts standard manual logic trees back into pure Virtual DOM Node code strings output definitions directly?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'render', 'B' => 'compile', 'C' => 'template', 'D' => 'mount']),
                'correct_answer' => 'A',
                'explanation' => 'The render function serves as a programmatic, higher-performance alternative to text template string layouts.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 75,
                'question_text' => 'Using arrow functions inside component methods definitions is a valid pattern since it automatically resolves instance context pointer routes accurately.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'Arrow functions lexically bind the parent context window, meaning "this" will be undefined or point to global scopes instead of the component instance.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 76,
                'question_text' => 'Which object key configuration is used to register custom mixin assets locally into a single standalone component script structure?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'mixins', 'B' => 'plugins', 'C' => 'extends', 'D' => 'imports']),
                'correct_answer' => 'A',
                'explanation' => 'The mixins option takes an array of mixin objects to merge into the component\'s local scope configuration.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 77,
                'question_text' => 'The built-in application instance event tracking implementation supports wildcards setups listening across paths cleanly via this.$on("*").',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'Vue 2 event systems require explicit event string matching labels and do not support broad wildcard parsing routing.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 78,
                'question_text' => 'Which specific directive is used to preserve whitespace line-breaks logic layouts explicitly as defined across original source text blocks layout files?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'v-pre', 'B' => 'v-cloak', 'C' => 'v-text', 'D' => 'v-once']),
                'correct_answer' => 'A',
                'explanation' => 'v-pre skips compilation for that element and all its children, displaying the raw template tags as-is.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 79,
                'question_text' => 'The computed property setter method configuration lets developers back-propagate value updates tracking changes directly onto internal tracked model fields.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Defining a computed property with both getter and setter functions allows you to safely intercept and process changes made to its value.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 80,
                'question_text' => 'Which configuration method parameter controls dynamic component instantiation asset cleanups right before memory teardown blocks trigger?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'beforeDestroy', 'B' => 'destroyed', 'C' => 'deactivated', 'D' => 'beforeUnmount']),
                'correct_answer' => 'A',
                'explanation' => 'beforeDestroy provides a safe window to manually clear intervals, listeners, and custom external resource links.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 81,
                'question_text' => 'Props data assets configuration values that map to Object formats must supply structural defaults values via factory function returns.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Object and Array types must return their default values from a factory function to avoid accidentally sharing state across component instances.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 82,
                'question_text' => 'Which global configuration toggle switch controls whether Vue components show explicit diagnostic logging indicators inside development inspection browser consoles?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'Vue.config.silent', 'B' => 'Vue.config.devtools', 'C' => 'Vue.config.productionTip', 'D' => 'Vue.config.performance']),
                'correct_answer' => 'A',
                'explanation' => 'Setting Vue.config.silent to true suppresses all Vue logs, warnings, and error messages in the console.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 83,
                'question_text' => 'Using dynamic arguments syntax lets developers pass reactive variable keys directly into attributes or event handler paths (e.g., v-bind:[attributeName]="value").',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Dynamic arguments wrap variable references in square brackets to resolve binding targets dynamically at runtime.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 84,
                'question_text' => 'Which lifecycle tracking stage component option fires the instant an active cached keep-alive component structure gets swapped out of vision layout visibility?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'deactivated', 'B' => 'activated', 'C' => 'beforeDestroy', 'D' => 'destroyed']),
                'correct_answer' => 'A',
                'explanation' => 'The deactivated hook triggers when a component inside <keep-alive> is unmounted but kept cached in memory.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 85,
                'question_text' => 'Custom plugin assets can be initialized broadly across global operational spaces via calls mapping to Vue.use() setups.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Vue.use() triggers a plugin\'s install function, extending the core framework functionality globally.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 86,
                'question_text' => 'Which specific modifier attached onto mouse click setups forces a layout event to capture actions exclusively coming from left mouse trackpad click operations?',
                'type' => 'MC',
                'options' => json_encode(['A' => '.left', 'B' => '.right', 'C' => '.middle', 'D' => '.exact']),
                'correct_answer' => 'A',
                'explanation' => 'The .left modifier restricts click event handlers to trigger only for standard left-click actions.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 87,
                'question_text' => 'Object models tracking dependencies initialized outside initial component instantiation configuration options are fully reactive out-of-the-box in Vue 2.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'Vue 2 cannot detect properties added dynamically after a reactive object is initialized unless added via Vue.set.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 88,
                'question_text' => 'Which system configuration path controls whether component tracking processes track performance timeline telemetry parameters within browser developer diagnostic views?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'Vue.config.performance', 'B' => 'Vue.config.devtools', 'C' => 'Vue.config.productionTip', 'D' => 'Vue.config.silent']),
                'correct_answer' => 'A',
                'explanation' => 'Enabling Vue.config.performance turns on component init, compile, and patch profiling timelines in the browser devtools.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 89,
                'question_text' => 'The v-model directive provides functional compatibility when placed onto non-form semantic element components natively.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'v-model expects interactive elements or components specifically configured with value properties and input event listeners.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 90,
                'question_text' => 'Which specific modifier limits an event tracking callback routine to run only when exactly the mapped key combination matches are pressed down precisely?',
                'type' => 'MC',
                'options' => json_encode(['A' => '.exact', 'B' => '.stop', 'C' => '.prevent', 'D' => '.native']),
                'correct_answer' => 'A',
                'explanation' => 'The .exact modifier ensures an event listener only triggers when the specified combination of system modifiers is held.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 91,
                'question_text' => 'In a Vue single-file component, the template, script, and style blocks are all written within a single ".vue" file.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Single-file components encapsulate structure, logic, and styling together in an intuitive, unified container.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 92,
                'question_text' => 'Which hook is triggered immediately after a keep-alive cached component instance is re-inserted into the active DOM tree view layout?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'activated', 'B' => 'deactivated', 'C' => 'mounted', 'D' => 'updated']),
                'correct_answer' => 'A',
                'explanation' => 'The activated lifecycle hook runs specifically for components wrapped in <keep-alive> when they are shown.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 93,
                'question_text' => 'Vue 2 reactive tracking systems leverage JavaScript Proxy objects to intercept and monitor changes to application data structures natively.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'Vue 2 uses Object.defineProperty getters and setters; JavaScript Proxy interceptors were introduced later in Vue 3.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 94,
                'question_text' => 'Which event modifier allows listening directly to a native browser DOM event on a child component\'s root element instead of its custom emitted events?',
                'type' => 'MC',
                'options' => json_encode(['A' => '.native', 'B' => '.stop', 'C' => '.self', 'D' => '.capture']),
                'correct_answer' => 'A',
                'explanation' => 'The .native modifier tells Vue to listen for standard browser DOM events on the component\'s outermost wrapper element.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 95,
                'question_text' => 'When passing class binding definitions using an array format, you can conditionally include class names by embedding an object inside the array.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Mixing objects inside class binding arrays allows combining static class lists with conditional class properties.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 96,
                'question_text' => 'Which global method completely disassembles an active Vue instance component, removing its reactive tracking listeners and child components from memory?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'this.$destroy()', 'B' => 'this.$unmount()', 'C' => 'this.$off()', 'D' => 'Vue.delete()']),
                'correct_answer' => 'A',
                'explanation' => 'this.$destroy() triggers full instance teardown, cleaning up reactive observations and sub-components.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 97,
                'question_text' => 'Computed properties are strictly read-only and can never be configured to accept direct value assignments.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'Computed properties are read-only by default, but you can explicitly define a custom setter method to capture value assignments.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 98,
                'question_text' => 'Which modifier attached to key event directives maps directly to the physical spacebar button on keyboards?',
                'type' => 'MC',
                'options' => json_encode(['A' => '.space', 'B' => '.spacebar', 'C' => '.blank', 'D' => '.tab']),
                'correct_answer' => 'A',
                'explanation' => 'The .space key modifier isolates keyboard event handlers to run exclusively when the spacebar is pressed.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 99,
                'question_text' => 'Vue automatically automatically batches multiple data modifications together into a single deferred DOM update cycle to maximize performance.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Vue buffers synchronous data mutations into a queue and flushes them in a single batch on the next tick to prevent unnecessary UI layout recalculations.'
            ],
            [
                'exam_topic' => 'vue_l2',
                'question_number' => 100,
                'question_text' => 'Which option can be used to explicitly configure custom options merge strategies when mixing assets inside global or local application definitions?',
                'type' => 'MC',
                'options' => json_encode(['A' => 'Vue.config.optionMergeStrategies', 'B' => 'Vue.mixin.strategies', 'C' => 'Vue.config.mergeRules', 'D' => 'this.$merge()']),
                'correct_answer' => 'A',
                'explanation' => 'Vue.config.optionMergeStrategies allows you to define custom functions to control how custom properties merge between components and mixins.'
            ],

            // ==========================================
            // TOPIC 2: JAVASCRIPT LEVEL 1 - 100 Qs
            // ==========================================
            [
                'exam_topic' => 'js_l1',
                'question_number' => 1,
                'question_text' => 'In JavaScript, the variable names "myVariable" and "myvariable" are treated as the same variable.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'JavaScript engine environments maintain strict case sensitivity across variable bindings.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 2,
                'question_text' => 'A variable declared with the const keyword can be reassigned to a new value later.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'The const keyword forbids value reassignment patterns after creation variables.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 3,
                'question_text' => 'The expression (10 == "10") evaluates to true in JavaScript.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'The loose equality operator (==) performs type coercion validation steps.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 4,
                'question_text' => 'Which keyword is used to declare a block-scoped variable that can be reassigned?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'var', 'b' => 'let', 'c' => 'constant', 'd' => 'set']),
                'correct_answer' => 'b',
                'explanation' => 'The let keyword initializes local variables with dynamic reassignment tracking properties.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 5,
                'question_text' => 'How do you write a single-line comment in JavaScript?',
                'type' => 'MC',
                'options' => json_encode(['a' => '-- comment', 'b' => '/* comment */', 'c' => '// comment', 'd' => '# comment']),
                'correct_answer' => 'c',
                'explanation' => 'Double forward slashes indicate single-line layout code annotations.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 6,
                'question_text' => 'What is the result of the following operation? let result = 20 + "5";',
                'type' => 'MC',
                'options' => json_encode(['a' => '25', 'b' => '205', 'c' => 'NaN', 'd' => 'TypeError']),
                'correct_answer' => 'b',
                'explanation' => 'Adding numbers to string formats triggers implicit concatenation behaviors ("205").'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 7,
                'question_text' => 'Which operator is used to compare both value and type (Strict Equality)?',
                'type' => 'MC',
                'options' => json_encode(['a' => '=', 'b' => '==', 'c' => '===', 'd' => '!=']),
                'correct_answer' => 'c',
                'explanation' => 'Triple equality checking prevents evaluation type coercion processes.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 8,
                'question_text' => 'Which of the following is NOT a primitive data type in JavaScript?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'Number', 'b' => 'String', 'c' => 'Boolean', 'd' => 'Array']),
                'correct_answer' => 'd',
                'explanation' => 'Arrays fall under Object reference classification layouts inside runtime memory.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 9,
                'question_text' => 'What is the correct syntax for declaring a function named "calculate"?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'function:calculate()', 'b' => 'function = calculate()', 'c' => 'function calculate()', 'd' => 'A call function calculate()']),
                'correct_answer' => 'c',
                'explanation' => 'Standard declaration paths require explicit function keyword syntax matching blocks.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 10,
                'question_text' => 'Which statement is used to perform different actions based on different conditions (multi-way branching)?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'for', 'b' => 'switch', 'c' => 'while', 'd' => 'return']),
                'correct_answer' => 'b',
                'explanation' => 'Switch statement setups dispatch evaluation routines down matching literal case paths.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 11,
                'question_text' => 'The value undefined represents the intentional absence of any object value.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'Null represents an intentional absence of value, whereas undefined indicates a variable has been declared but not yet initialized.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 12,
                'question_text' => 'JavaScript is an interpreted language that executes code step-by-step at runtime.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'JavaScript engines interpret and execute source scripts dynamically directly within hosting environments.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 13,
                'question_text' => 'Which built-in browser method is used to write text logs directly into the developer console layout panel?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'window.print()', 'b' => 'console.log()', 'c' => 'document.write()', 'd' => 'alert()']),
                'correct_answer' => 'b',
                'explanation' => 'console.log() prints debug messages directly to development browser consoles.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 14,
                'question_text' => 'Which arithmetic operator calculates the remainder left over after dividing one integer number value by another?',
                'type' => 'MC',
                'options' => json_encode(['a' => '/', 'b' => '%', 'c' => '*', 'd' => '^']),
                'correct_answer' => 'b',
                'explanation' => 'The modulus operator (%) returns the fractional remainder remaining from integer division calculations.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 15,
                'question_text' => 'What is the output evaluation result of the mathematical expression calculation 10 + 5 * 2 inside JavaScript?',
                'type' => 'MC',
                'options' => json_encode(['a' => '30', 'b' => '20', 'c' => '25', 'd' => '15']),
                'correct_answer' => 'b',
                'explanation' => 'Multiplication takes priority over addition, computing 5 * 2 = 10 first, then 10 + 10 = 20.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 16,
                'question_text' => 'Variables initialized using the var keyword are scoped to the nearest enclosing execution block structure.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'Variables declared with var are function-scoped or globally-scoped, ignoring curly block constraints.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 17,
                'question_text' => 'The value NaN stands for "Not a Number" and its type checked classification via typeof returns "number".',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'NaN is a numeric data type value representing an undefined or unrepresentable mathematical calculation result.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 18,
                'question_text' => 'Which built-in structural property measures the total sequential entry items count tracking length inside an array?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'size', 'b' => 'length', 'c' => 'count', 'd' => 'index']),
                'correct_answer' => 'b',
                'explanation' => 'The .length property tracks element counts within array instances.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 19,
                'question_text' => 'Which standard loop implementation guarantees execution code blocks run at least one time before evaluating conditional bounds?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'for', 'b' => 'while', 'c' => 'do...while', 'd' => 'foreach']),
                'correct_answer' => 'c',
                'explanation' => 'A do...while loop evaluates its condition after executing the internal code block.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 20,
                'question_text' => 'Writing an empty string value evaluates to a truthy value when converted into a boolean context model.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'An empty string ("") is a falsy value; strings must contain at least one character to be truthy.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 21,
                'question_text' => 'Which native string method transforms all alphabetical character components cleanly into capitalized formats?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'toUpperCase()', 'b' => 'toCcCaps()', 'c' => 'upper()', 'd' => 'capitalize()']),
                'correct_answer' => 'a',
                'explanation' => 'toUpperCase() returns a new string with all lowercase letters converted to uppercase.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 22,
                'question_text' => 'Which native array manipulation routine pushes a brand new data element directly into the tail end position index of an array?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'pop()', 'b' => 'push()', 'c' => 'shift()', 'd' => 'unshift()']),
                'correct_answer' => 'b',
                'explanation' => 'The push() method appends one or more elements to the end of an array and returns its new length.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 23,
                'question_text' => 'An array data instance index starting lookup entry point begins counting offset locations at position number 1.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'JavaScript arrays are zero-indexed; the first element lives at index 0.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 24,
                'question_text' => 'Which operator symbol sets up short-circuit logical evaluation pathways where code fires only if both input conditions check out true?',
                'type' => 'MC',
                'options' => json_encode(['a' => '||', 'b' => '&&', 'c' => '!', 'd' => '??']),
                'correct_answer' => 'b',
                'explanation' => 'The logical AND operator (&&) returns true only if both operands evaluate to true.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 25,
                'question_text' => 'Executing the typeof check operator against an array structural target returns an evaluation string label matching "object".',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Arrays are considered objects under the hood in JavaScript, so typeof returns "object".'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 26,
                'question_text' => 'Which global parsing method converts string numeric formats safely into base integer primitive data formats?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'parseInt()', 'b' => 'parseFloat()', 'c' => 'Integer()', 'd' => 'castInt()']),
                'correct_answer' => 'a',
                'explanation' => 'parseInt() parses a string argument and returns an integer of the specified radix.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 27,
                'question_text' => 'Which operator checks whether a value is inequality matched to another without evaluating matching data type strictness steps?',
                'type' => 'MC',
                'options' => json_encode(['a' => '!=', 'b' => '!==', 'c' => '=', 'd' => '<>']),
                'correct_answer' => 'a',
                'explanation' => 'The loose inequality operator (!=) checks values while applying type coercion.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 28,
                'question_text' => 'Objects manage internal collection sets structured as ordered sequence arrays using numerical lookup tracking criteria markers.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'Objects store data using unordered key-value string property pairs rather than ordered sequential positions.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 29,
                'question_text' => 'Which keyword immediately exits out from an entire looping execution block frame, skipping any remaining iterations?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'continue', 'b' => 'break', 'c' => 'return', 'd' => 'exit']),
                'correct_answer' => 'b',
                'explanation' => 'The break statement immediately terminates loops or switch conditions, passing control to the next line of code.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 30,
                'question_text' => 'Function parameters are treated as local variable bindings constrained inside that function\'s scope block context.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Arguments passed to a function become isolated local variables within its execution context.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 31,
                'question_text' => 'What is the correct syntax approach to initialize an empty object literal model cleanly?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'let obj = [];', 'b' => 'let obj = {};', 'c' => 'let obj = ();', 'd' => 'let obj = Object.empty();']),
                'correct_answer' => 'b',
                'explanation' => 'Curly braces ({}) represent the standard object literal syntax for creating empty object models.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 32,
                'question_text' => 'The window object represents the top-tier global execution space scope context layer when running JavaScript code inside web browsers.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'The window object serves as the global namespace for browser-based JavaScript environments.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 33,
                'question_text' => 'Which string method extracts a chunk section of text and returns it as a new string without modifying the original source text?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'slice()', 'b' => 'splice()', 'c' => 'push()', 'd' => 'split()']),
                'correct_answer' => 'a',
                'explanation' => 'slice() extracts a section of a string based on start and end index arguments.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 34,
                'question_text' => 'JavaScript array sizes must be explicitly defined upon creation and cannot expand or shrink dynamically.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'JavaScript arrays are dynamic memory structures that automatically grow or shrink as elements are modified.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 35,
                'question_text' => 'Which native array routine slices off exactly one entry element from the head-most (index 0) position of an array?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'pop()', 'b' => 'shift()', 'c' => 'unshift()', 'd' => 'push()']),
                'correct_answer' => 'b',
                'explanation' => 'shift() removes the first element from an array and shifts all subsequent elements down one index.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 36,
                'question_text' => 'The assignment operator (=) compares two values to check if they are equal.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'A single equals sign (=) assigns a value to a variable, while double or triple equals are used for comparison.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 37,
                'question_text' => 'Which built-in Math utility method rounds floating numbers down to the nearest lower whole integer?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'Math.ceil()', 'b' => 'Math.floor()', 'c' => 'Math.round()', 'd' => 'Math.abs()']),
                'correct_answer' => 'b',
                'explanation' => 'Math.floor() rounds a number downward to its nearest integer value.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 38,
                'question_text' => 'Using the const keyword allows developers to safely mutate internal property values inside objects declared as constants.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'The const keyword prevents reassigning the variable identity reference itself, but does not make the underlying object properties immutable.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 39,
                'question_text' => 'Which built-in structural dialog displays an interactive message prompting the user to type in text content feedback input?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'alert()', 'b' => 'confirm()', 'c' => 'prompt()', 'd' => 'console.log()']),
                'correct_answer' => 'c',
                'explanation' => 'prompt() opens a modal dialog box with a text input field and returns the user\'s inputted string.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 40,
                'question_text' => 'A loop structure will run indefinitely as an infinite loop if its conditional evaluation criteria never transitions to false.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Loops continue executing until their exit conditions evaluate to false or an explicit break statement is hit.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 41,
                'question_text' => 'Which method splits a string into an array of substrings based on a specified separator character?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'split()', 'b' => 'join()', 'c' => 'slice()', 'd' => 'concat()']),
                'correct_answer' => 'a',
                'explanation' => 'split() divides a string into an ordered list of substrings, places them into an array, and returns the array.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 42,
                'question_text' => 'The comparison expression (true && false) evaluates to true.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'The logical AND operator requires both sides to be true; if either side is false, the expression evaluates to false.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 43,
                'question_text' => 'Which operator is used to check if a value is strictly NOT equal, matching both value and type?',
                'type' => 'MC',
                'options' => json_encode(['a' => '!=', 'b' => '!==', 'c' => '!===', 'd' => '<>']),
                'correct_answer' => 'b',
                'explanation' => '!== represents strict inequality, ensuring no implicit type conversion occurs during evaluation.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 44,
                'question_text' => 'A function with no explicit return statement returns an implicit value of undefined.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'JavaScript automatically returns undefined from a function if it completes execution without hitting a return statement.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 45,
                'question_text' => 'Which native array method merges two or more arrays together into a brand new array structure?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'merge()', 'b' => 'concat()', 'c' => 'join()', 'd' => 'push()']),
                'correct_answer' => 'b',
                'explanation' => 'concat() combines multiple arrays or values and returns a new array without modifying the original arrays.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 46,
                'question_text' => 'The loop statement continue skips the current loop iteration and moves directly to the next iteration step.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'The continue statement interrupts the current loop body execution flow and jumps straight to the next condition evaluation.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 47,
                'question_text' => 'What is the evaluation result of the expression Boolean("false") inside JavaScript?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'false', 'b' => 'true', 'c' => 'undefined', 'd' => 'NaN']),
                'correct_answer' => 'b',
                'explanation' => 'Any non-empty string is truthy in JavaScript, including the string literal "false".'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 48,
                'question_text' => 'Declaring a variable without using any of the keywords var, let, or const implicitly creates a global variable in non-strict mode.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Assigning a value to an undeclared variable attaches it to the global environment object, creating a global variable.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 49,
                'question_text' => 'Which native method removes the very last element item from an array structure and returns it?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'shift()', 'b' => 'pop()', 'c' => 'unshift()', 'd' => 'splice()']),
                'correct_answer' => 'b',
                'explanation' => 'pop() truncates the final entry element from an array and returns that value to the caller.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 50,
                'question_text' => 'The logical comparison expression (false || true) evaluates to false.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'The logical OR operator (||) evaluates to true if at least one of its operands is true.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 51,
                'question_text' => 'Which built-in method checks if an array includes a specific element value, returning true or false?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'contains()', 'b' => 'includes()', 'c' => 'indexOf()', 'd' => 'search()']),
                'correct_answer' => 'b',
                'explanation' => 'includes() determines whether an array contains a certain value among its entries, returning a boolean.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 52,
                'question_text' => 'JavaScript loops can loop through object property keys using a "for...in" loop structure.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'The for...in loop structure iterates over all enumerable string properties of an object.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 53,
                'question_text' => 'What character sequence notation identifies the starting signature parameters of standard template literal strings?',
                'type' => 'MC',
                'options' => json_encode(['a' => '"', 'b' => '\'', 'c' => '`', 'd' => '#']),
                'correct_answer' => 'c',
                'explanation' => 'Template literals use backticks (`) instead of standard single or double quote string wrappers.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 54,
                'question_text' => 'The global evaluation equation (null == undefined) checks out as true inside loose validation checks.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'The loose equality operator treats null and undefined as loosely equal to each other.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 55,
                'question_text' => 'Which operator returns a string string describing the primitive data type evaluated?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'typeof', 'b' => 'instanceof', 'c' => 'type', 'd' => 'dataType']),
                'correct_answer' => 'a',
                'explanation' => 'The typeof operator returns a string indicating the evaluation type of the un-evaluated operand.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 56,
                'question_text' => 'The default initialization value for object properties that have not been explicitly defined is null.',
                'type' => 'TF',
                'options' => json_encode(['Y' => 'YES', 'N' => 'NO']),
                'correct_answer' => 'N',
                'explanation' => 'Accessing non-existent properties on an object returns undefined, not null.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 57,
                'question_text' => 'Which native array method creates a string string out of an array by gluing elements together with a specified separator string?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'join()', 'b' => 'split()', 'c' => 'toString()', 'd' => 'concat()']),
                'correct_answer' => 'a',
                'explanation' => 'join() flattens array entries into a single cohesive string sequence joined by a separator string.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 58,
                'question_text' => 'An anonymous function is a function definition statement that is declared without an explicit name identifier label.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Anonymous functions have no explicit name identifier and are often used as callback arguments or assigned to variables.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 59,
                'question_text' => 'Which mathematical utility method calculates a random floating-point number between 0 (inclusive) and 1 (exclusive)?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'Math.random()', 'b' => 'Math.rand()', 'c' => 'Math.floor()', 'd' => 'Math.seed()']),
                'correct_answer' => 'a',
                'explanation' => 'Math.random() generates a pseudo-random floating-point number between 0 and 1.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 60,
                'question_text' => 'The global condition check expression (5 === "5") returns true.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'Strict equality validation returns false because the number 5 and the string "5" are different data types.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 61,
                'question_text' => 'Which string method checks whether a string ends with the characters of a specified string, returning true or false?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'endsWith()', 'b' => 'startsWith()', 'c' => 'includes()', 'd' => 'match()']),
                'correct_answer' => 'a',
                'explanation' => 'endsWith() determines whether a string ends with the characters of a specified string substring.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 62,
                'question_text' => 'JavaScript loops can loop through array item elements using a "for...of" loop structure.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'The for...of loop creates a loop iterating over iterable data objects, including arrays.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 63,
                'question_text' => 'Which keyword returns a value from a function execution block and terminates its execution context?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'break', 'b' => 'return', 'c' => 'stop', 'd' => 'yield']),
                'correct_answer' => 'b',
                'explanation' => 'The return statement ends function execution and specifies a value payload to return to the caller.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 64,
                'question_text' => 'The logical NOT operator (!) inverts a boolean value, transforming true into false and vice versa.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'The exclamation mark symbol (!) operators flip truthy values to false and falsy values to true.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 65,
                'question_text' => 'Which global conversion method transforms strings containing floating point numbers into actual floating point values?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'parseFloat()', 'b' => 'parseInt()', 'c' => 'Number()', 'd' => 'Float()']),
                'correct_answer' => 'a',
                'explanation' => 'parseFloat() parses a string argument string and attempts to resolve a floating point numeric value.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 66,
                'question_text' => 'Global variable bindings declared outside explicit block constraints are attached to the global environment container context.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Variables declared outside functions or blocks act as top-tier global assets accessible across scripts.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 67,
                'question_text' => 'Which structural logic pathway branches execution down a block if an initial "if" conditional check fails?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'else', 'b' => 'elseif', 'c' => 'switch', 'd' => 'then']),
                'correct_answer' => 'a',
                'explanation' => 'The else keyword specifies a fallback block of code to run if the preceding conditional expression evaluates to false.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 68,
                'question_text' => 'The index position lookup marker of an array\'s last element item matches the calculation value of its length minus one.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Since indexing begins at zero, the final position index maps to array.length - 1.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 69,
                'question_text' => 'Which native string method checks if a substring pattern is contained within a string, returning true or false?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'indexOf()', 'b' => 'includes()', 'c' => 'search()', 'd' => 'match()']),
                'correct_answer' => 'b',
                'explanation' => 'The string includes() method checks if a target substring exists anywhere within a text string.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 70,
                'question_text' => 'Writing an unassigned variable definition without initializing it leaves its implicit evaluation type set to null.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'Variables that are declared but not assigned a value are initialized with a default value of undefined.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 71,
                'question_text' => 'Which statement defines a fallback match path block inside switch control structures if no literal case match is found?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'break', 'b' => 'default', 'c' => 'fallback', 'd' => 'else']),
                'correct_answer' => 'b',
                'explanation' => 'The default keyword specifies a block of code to execute if no matching case expression matches the switch value.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 72,
                'question_text' => 'The built-in dialog alert() blocks code execution steps inside browser runtime threads until the user dismisses the dialog.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Alert modals are synchronous blocking UI components that pause background browser execution loops.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 73,
                'question_text' => 'Which operator checks whether a left operand value is greater than or equal to a right operand value?',
                'type' => 'MC',
                'options' => json_encode(['a' => '>', 'b' => '>=', 'c' => '<=', 'd' => '==']),
                'correct_answer' => 'b',
                'explanation' => 'The >= operator evaluates whether the left-hand value meets or exceeds the right-hand value.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 74,
                'question_text' => 'Using double quotes versus single quotes string wrappers affects performance when processing text strings in JavaScript.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'Single and double quotes are functionally identical in JavaScript; picking between them is a matter of code style preference.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 75,
                'question_text' => 'Which native array method inserts one or more elements to the front-most index (index 0) position of an array?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'shift()', 'b' => 'unshift()', 'c' => 'push()', 'd' => 'pop()']),
                'correct_answer' => 'b',
                'explanation' => 'unshift() prepends elements to the start of an array and shifts existing elements to higher indexes.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 76,
                'question_text' => 'JavaScript functions can accept unlimited parameters inputs regardless of how many parameter fields were defined in the function signature.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Extra parameters passed to a function are accessible via the built-in arguments object or rest parameters (...), even if they aren\'t explicitly named.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 77,
                'question_text' => 'Which native array method returns the first index position where a specified element value is found, or -1 if it is missing?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'indexOf()', 'b' => 'search()', 'c' => 'includes()', 'd' => 'find()']),
                'correct_answer' => 'a',
                'explanation' => 'indexOf() searches the array for the specified item and returns its index position, or -1 if the item cannot be found.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 78,
                'question_text' => 'The comparison equation expression (null === undefined) evaluates to true.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'Strict equality validation checks types, and since null and undefined are different types, the expression returns false.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 79,
                'question_text' => 'Which utility method converts JavaScript object structures cleanly into standardized JSON string formats?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'JSON.stringify()', 'b' => 'JSON.parse()', 'c' => 'Object.toString()', 'd' => 'JSON.cast()']),
                'correct_answer' => 'a',
                'explanation' => 'JSON.stringify() serializes objects or values into a standard JSON-compliant text string format.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 80,
                'question_text' => 'A string text string can be concatenated cleanly to a number variable value using the addition operator (+).',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Using the plus operator with a string operand converts non-string values into strings and concatenates them.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 81,
                'question_text' => 'Which native string method trims whitespace from both the beginning and end of a text string?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'strip()', 'b' => 'trim()', 'c' => 'clean()', 'd' => 'cut()']),
                'correct_answer' => 'b',
                'explanation' => 'trim() removes whitespace from both ends of a string and returns a new trimmed string.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 82,
                'question_text' => 'The decrement operator (--) decreases an integer numeric variable\'s value by exactly 1.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'The -- operator subtracts 1 from its operand and updates the variable value.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 83,
                'question_text' => 'Which utility method converts valid JSON text string formats back into usable JavaScript object structures?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'JSON.parse()', 'b' => 'JSON.stringify()', 'c' => 'Object.parse()', 'd' => 'JSON.toObject()']),
                'correct_answer' => 'a',
                'explanation' => 'JSON.parse() parses a JSON string construct and instantiates the matching JavaScript value or object structure.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 84,
                'question_text' => 'Object property configuration tracking keys can be accessed dynamically using bracket syntax notation strings.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Bracket notation (object["property"]) allows using variables or dynamic strings as keys to look up values on an object.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 85,
                'question_text' => 'Which native arithmetic method calculates the absolute value of a number, turning negative numbers into positive numbers?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'Math.abs()', 'b' => 'Math.ceil()', 'c' => 'Math.floor()', 'd' => 'Math.sqrt()']),
                'correct_answer' => 'a',
                'explanation' => 'Math.abs() returns the absolute value of a number, converting negative numbers to their positive equivalents.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 86,
                'question_text' => 'An array element index position lookups containing non-existent offsets flags runtime crashes instantly inside environments.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'Accessing an out-of-bounds array index returns undefined rather than crashing the script execution runtime.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 87,
                'question_text' => 'Which native array method reverses the order of the elements in an array in-place?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'sort()', 'b' => 'reverse()', 'c' => 'flip()', 'd' => 'invert()']),
                'correct_answer' => 'b',
                'explanation' => 'reverse() transposes array element positions in place, mutating the original array structure.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 88,
                'question_text' => 'The increment operator (++) increases an integer numeric variable value by exactly 1.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'The ++ operator adds 1 to its numeric variable operand and returns the value.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 89,
                'question_text' => 'Which comparison operator evaluates whether a left value is strictly lower than a right value?',
                'type' => 'MC',
                'options' => json_encode(['a' => '<', 'b' => '>', 'c' => '<=', 'd' => '!=']),
                'correct_answer' => 'a',
                'explanation' => 'The less-than operator (<) returns true if the left value is smaller than the right value.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 90,
                'question_text' => 'JavaScript supports multi-line comment notation block layouts using the character wrapper combinations /* comment */.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'Forward slashes combined with asterisks open and close multi-line comment blocks in JavaScript.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 91,
                'question_text' => 'Which statement acts as a loop counter initialization step header line component inside standard "for" loops constructs?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'The first expression section before the first semicolon', 'b' => 'The middle expression section', 'c' => 'The final updating expression section', 'd' => 'The internal block body']),
                'correct_answer' => 'a',
                'explanation' => 'The first expression of a for loop header initializes loop counter variables before the loop body runs.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 92,
                'question_text' => 'The equality verification equation ("5" == 5) returns false due to string vs number mismatching profiles.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'The loose equality operator (==) automatically applies type coercion, converting the string "5" into the number 5, meaning the expression returns true.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 93,
                'question_text' => 'Which native method returns a character at a specific index location within a string text string?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'charAt()', 'b' => 'indexOf()', 'c' => 'stringIndex()', 'd' => 'substr()']),
                'correct_answer' => 'a',
                'explanation' => 'charAt() returns the character at the specified index position argument within a string.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 94,
                'question_text' => 'Variables declared using the let keyword can be re-declared within the same block scope.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'The let keyword blocks re-declaring a variable within the same scope block to protect variable identities.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 95,
                'question_text' => 'Which comparison operator checks if a left value is less than or equal to a right value target operand?',
                'type' => 'MC',
                'options' => json_encode(['a' => '<=', 'b' => '>=', 'c' => '=<', 'd' => '<']),
                'correct_answer' => 'a',
                'explanation' => 'The less-than-or-equal-to operator (<=) checks if the left value is smaller than or equal to the right value.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 96,
                'question_text' => 'The global condition check expression calculation (0 == false) evaluates to true.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'TRUE',
                'explanation' => 'In loose equality checking, both 0 and false are coerced into matching falsy states, evaluating to true.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 97,
                'question_text' => 'Which native array method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'splice()', 'b' => 'slice()', 'c' => 'concat()', 'd' => 'join()']),
                'correct_answer' => 'a',
                'explanation' => 'splice() modifies an array in-place by adding, removing, or replacing elements at a specified index.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 98,
                'question_text' => 'A block-scoped variable declared inside a standard curly braces block ({}) is accessible outside that block if declared using let.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'Variables declared with let or const are block-scoped and cannot be accessed from outside their enclosing curly braces.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 99,
                'question_text' => 'Which built-in Math utility method rounds floating-point numbers up to the nearest higher whole integer?',
                'type' => 'MC',
                'options' => json_encode(['a' => 'Math.ceil()', 'b' => 'Math.floor()', 'c' => 'Math.round()', 'd' => 'Math.abs()']),
                'correct_answer' => 'a',
                'explanation' => 'Math.ceil() rounds a number upward to its nearest higher integer value.'
            ],
            [
                'exam_topic' => 'js_l1',
                'question_number' => 100,
                'question_text' => 'The global evaluation check equation (1 === true) checks out as true inside strict equality validation paths.',
                'type' => 'TF',
                'options' => json_encode(['TRUE' => 'TRUE', 'FALSE' => 'FALSE']),
                'correct_answer' => 'FALSE',
                'explanation' => 'Strict equality checks value and type; the number 1 and the boolean value true are different types, so the expression returns false.'
            ],
        ];

        DB::table('exam_questions')->insert($questions);
    }
}