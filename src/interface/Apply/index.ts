import Functor from "../Functor";

export default interface Apply<A> extends Functor<A> {
    ap<B, C>(j: Apply<B>): Apply<C>;
}
